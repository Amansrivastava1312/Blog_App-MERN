import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiArrowSmRight, HiUser , HiDocumentText, HiOutlineUserGroup, HiAnnotation, HiChartPie} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdCreateNewFolder } from "react-icons/md";
export default function DashSideBar() {
  const {currentUser,error,loading} = useSelector((state)=>state.user);
    const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    console.log(tabFromUrl)
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location])

  return (
  <Sidebar className='w-full md:w-56'>
    <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
        {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          {
            currentUser && currentUser.isAdmin && (
              <Link to="/create-post">
                <Sidebar.Item
                icon={MdCreateNewFolder }
                as='div'
                >
                  Create Post
                </Sidebar.Item>
              </Link>
            )
          }
            <Link to={'/dashboard?tab=profile'}>
            <Sidebar.Item active={tab=='profile'}  className='cursor-pointer' icon={HiUser} label={currentUser.isAdmin ? 'Creator':'User'} labelColor='dark' as={'div'}>
                Profile
            </Sidebar.Item>
            </Link>
            {currentUser.isAdmin && <Link to={'/dashboard?tab=posts'}>
              <Sidebar.Item active={tab=='posts'} labelColor='dark' icon={HiDocumentText}  className='cursor-pointer' as={'div'}>
              Posts
            </Sidebar.Item></Link>}
            
            {currentUser.isAdmin && <Link to={'/dashboard?tab=users'}>
              <Sidebar.Item active={tab=='users'} labelColor='dark' icon={HiOutlineUserGroup}  className='cursor-pointer' as={'div'}>
              users
            </Sidebar.Item></Link>}

            {currentUser.isAdmin && <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>}


            <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer' labelColor='dark'>
                Sign Out
            </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
    
  )
}
