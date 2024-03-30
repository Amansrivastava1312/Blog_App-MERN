import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Checkbox, Label, TextInput } from 'flowbite-react';
import OAuth from '../components/OAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    isInterested: Yup.boolean(), // Add validation for isInterested
});

const SignUp = () => {
    const [isInterested, setIsInterested] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            isInterested: false, // Initialize isInterested to false
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });
                const data = await response.json();
                if (response.ok) {
                    // If signup successful, show toast notification
                    toast.success('Signup successful! You can now sign in.');
                    // Navigate to the sign-in page after a delay
                    setTimeout(() => {
                        navigate('/sign-in');
                    }, 3000);
                } else {
                    // If signup failed, display error message
                    toast.error(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('An error occurred while signing up');
            }
        },
    });

    const handleCheckboxChange = () => {
        setIsInterested(!isInterested);
        formik.setFieldValue('isInterested', !isInterested); // Update isInterested in formik values
    };

    return (
        <div className='min-h-screen mt-20'>
            <ToastContainer />
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/* Left side*/}
                <div className='flex-1'>
                    <Link to='/' className='font-bold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                            TechByte's
                        </span>
                        Blog
                    </Link>
                    <p className='text-sm mt-5'>
                        Join TechByte's Blog community! Sign up to share your tech insights and discoveries.
                    </p>
                </div>
                {/* Right side */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
                        <div className=''>
                            <Label value='Your User Name' />
                            <TextInput
                                type='text'
                                placeholder='Username'
                                id='username'
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className='text-red-500'>{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div>
                            <Label value='Your Email' />
                            <TextInput
                                type='text'
                                placeholder='Email'
                                id='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-500'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <Label value='Your Password' />
                            <TextInput
                                type='password'
                                placeholder='Password'
                                id='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className='text-red-500'>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div>
                            <Checkbox
                                className=''
                                checked={isInterested}
                                onChange={handleCheckboxChange}
                            />
                            <Label className='ml-2' value="I'm interested in posting blogs on this website." />
                        </div>
                        <Button gradientDuoTone={'purpleToPink'} type='submit'>
                            Sign Up
                        </Button>
                        <OAuth />
                    </form>
                    <div className='flex gap-2 text-sm mt-5'>
                        <span>Have an account?</span>
                        <Link to='/sign-in' className='text-blue-500'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
