import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

    const handleButtonClick = () => {
      // Change the route to '/contact'
      navigate('/');
    };
  return (
    <div>
      <div className="bg-white p-3 rounded-md w-full flex justify-between items-center fixed top-0 left-0 z-50 shadow-md">
        <div
          id="logo"
          className="text-xl font-bold ml-6 lg:ml-28 items-center text-gray-800 flex transition duration-300 ease-in-out transform hover:scale-105"
        >
          {/* <!-- Your logo image or text goes here --> */}
          {/* <img className='h-16 w-16' src="/src/images/logo.png" alt="logo" /> */}
          
          <button
          className='flex items-center'
            onClick={handleButtonClick}
          >
            {/* <h2 className='mx-4'>
            AIO Solutions
           </h2> */}
          {/* <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_1280.png" alt="logo" /> */}
         <img className='h-20 w-40' src="/src/images/logo.png" alt="" />
          </button>
          
          </div>
          


        <nav id="nav" className="flex space-x-4 mr-4 lg:mr-40">

        <Link
            to="/"
            className="text-md font-semibold nav relative inline-block hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105 "
          >
            Home
          </Link>
        <Link
            to="/about"
            className="text-md font-semibold nav relative inline-block hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105 "
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-md font-semibold nav relative inline-block hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105 "
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
