import React from 'react';
import {assets} from "../../assets/assets.js"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isCourseListPage = location.hostname.includes("/course-list")

  return (
    <div className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"}`}>
      <img src={assets.logo} alt='Logo' className='w-28' />
      {/* for large screen size */}
      <div className='hidden md:flex gap-5 items-center text-gray-500'>
        <div className='flex items-center gap-5'>
          <button>Become Educator</button>
          | <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        <button className='bg-blue-600 px-5 py-2 rounded-full text-white'>Create Account</button>
      </div>
      {/* for small screen size */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-3'>
          <button>Become Educator</button>
          | <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        <button><img src={ assets.user_icon } alt='user_icon' /></button>
      </div>
    </div>
  );
}

export default Navbar;
