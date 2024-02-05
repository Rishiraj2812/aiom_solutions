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
            <img className='h-16 w-28 md:h-20 md:w-40' src="/images/logo.png" alt="logo" />
          </button>
        </div>

        <nav id="nav" className="flex space-x-4 mr-12 lg:mr-40">
          {/* Visible on all screens */}
          <div ref={dropdownRef} className="sm:hidden relative">
            <button
              onClick={toggleDropdown}
              id="dropdownDefaultButton"
              className="text-white bg-blue-700 hover:bg-blue-800 nav relative focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Menu
              <svg
                className={`w-2.5 h-2.5 ms-3 ${dropdownVisible ? 'transform rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            {/* Dropdown menu */}
            {dropdownVisible && (
              <div
                id="dropdown"
                className="absolute z-10 top-full left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Hidden on small screens */}
          <Link
            to="/"
            className="hidden sm:inline text-md font-semibold nav relative hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-md font-semibold nav relative hover:text-blue-800 text-black px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105"
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
