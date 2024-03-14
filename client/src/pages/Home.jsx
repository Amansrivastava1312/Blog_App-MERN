import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-6 p-6 sm:p-10 lg:p-14 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl text-center'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm text-center'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline text-center'
        >
          View all posts
        </Link>
      </div>
      
      <div className='bg-amber-100 dark:bg-slate-700'>
        <div className='max-w-6xl mx-auto p-6 sm:p-10 lg:p-14'>
          <CallToAction />
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-6 sm:p-10 lg:p-14'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {posts.map((post) => (
                <div className="flex justify-center" key={post._id}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
