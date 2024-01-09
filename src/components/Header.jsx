import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};

const Header = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    // Change the route to '/'
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div>
      <div className="bg-white p-3 rounded-md w-full flex justify-between items-center fixed top-0 left-0 z-50 shadow-md">
        <div
          id="logo"
          className="text-xl font-bold ml-6 lg:ml-28 items-center text-gray-800 flex transition duration-300 ease-in-out transform hover:scale-105"
        >
          <button className='flex items-center' onClick={handleButtonClick}>
            <img className='h-16 w-28 md:h-20 md:w-40' src="/src/images/logo.png" alt="" />
          </button>
        </div>

        <nav id="nav" className="flex space-x-4 mr-12 lg:mr-40">
          {/* Visible on all screens */}
          <div ref={dropdownRef} className="sm:hidden">
            <button
              onClick={toggleDropdown}
              className="text-md font-semibold nav relative inline-block hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Menu
            </button>
            {dropdownVisible && (
              <div>
                <Link
                  to="/about"
                  className="block text-md font-semibold nav relative hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block text-md font-semibold nav relative hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          {/* Hidden on small screens */}
          <Link
            to="/"
            className="hidden sm:inline text-md font-semibold nav relative inline-block hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-md font-semibold nav relative inline-block hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hidden sm:inline text-md font-semibold nav relative inline-block hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
