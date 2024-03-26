// Home.js

import { Link } from 'react-router-dom';
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Increased top padding */}
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-bold text-teal-700 mb-4">Welcome to TechByte Blog</h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8">Explore the latest in technology, read insightful articles, and join our vibrant community!</p>
        <Link to="/create-post" className="bg-teal-500 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-teal-600 transition duration-300 mr-4">
          Create Post
        </Link>
      </div>
      
      {/* Recent Posts Section */}
      <div className="my-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div className="flex justify-center" key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
      
      {/* View All Posts Section */}
      <div className="text-center mt-6">
        <Link to={'/search'} className='text-lg text-teal-500 hover:underline font-semibold transition duration-300 inline-block bg-white shadow-md py-3 px-8 rounded-lg hover:shadow-lg'>
          View all posts
        </Link>
      </div>
    </div>
  );
}
