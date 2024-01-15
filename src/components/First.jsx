import React from 'react';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

const First = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Change the route to '/contact'
    navigate('/contact');
  };

  return (
    <div>
      <div className="bg-stone-700 dark:text-stone-200 p-10">
        <div className="container mx-auto mt-40 md:mt-0 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:pt-28 md:mb-0">
            <div className="text-center text-stone-200">
              <h3 className="custom-title font-bold">Save Time and Delegate Your Repetitive Tasks</h3>
            </div>
            <ul className="custom-checklist space-y-4 w-full h-fit">
              <li className="mt-10">
                {/* <div className="bg-stone-200 h-5 w-5 rounded-full flex items-center justify-center mr-3">
                  <i className="custom-icon fas fa-check"></i>
                </div>
                <div className="flex">Low Cost Virtual Staff</div> */}
                  <div className='flex w-full h-10'>
                    <div className='w=1/5 ' style={{ fontSize: '80px' }}>
                        <strong>&#8226;</strong>
                    </div>
                    <div className='w= 4/5 mt-11 ml-2'>
                        Low Cost Virtual Staff
                    </div>
                  </div>
              </li>
              <li className="">
                  <div className=' flex w-full h-fit'>
                    <div className='w=1/5 ' style={{ fontSize: '80px' }}>
                        <strong>&#8226;</strong>
                    </div>
                    <div className='w= 4/5 mt-11 ml-2'>
                    Focus on Growing the Business, Let Us take care of the admin.
                    </div>
                  </div>
              </li>
              
              {/* <li className="flex items-center">
                <div className="bg-stone-200 h-5 w-8  md:h-5 md:w-5 rounded-full flex items-center justify-center mr-3">
                  <i className="custom-icon fas fa-check"></i>
                </div>
                <div className="flex">Focus on Growing the Business, Let Us take care of the admin.</div>
              </li> */}
            </ul>
            <div>
              <button
                className='custom-button bg-blue-500 hover:bg-blue-700 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 text-white py-2 px-4 inline-block'
                onClick={handleButtonClick}
              >
                Contact us for a Free Consultation call
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="custom-image pl-5 pt-24">
              {/* /src/images/marketing.png */}
              <img
                src="https://img-v3.deepdreamgenerator.com/3390450/eb31tw_5284d4330cd5211c8f936329d23e32d436ca59ea.jpg"
                alt="Campaign Management"
                className="w-full h-auto bg-transparent rounded-lg shadow-md text-center overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
