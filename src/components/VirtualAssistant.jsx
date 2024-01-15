import React from 'react'
import { useNavigate } from 'react-router-dom';


const VirtualAssistant = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      // Change the route to '/contact'
      navigate('/about');
    };
  return (
    <div>

        <div id="why-us" className="bg-cover bg-center bg-fixed py-16 bg-gray-100 text-stone-700">
                <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">WHY HIRE A VIRTUAL ASSISTANT?</h2>
                <p className=" text-lg text-center pl-150 pr-150">
                Our services cater to the needs of busy professionals striving to expand their businesses. We specialize in handling essential yet time-consuming tasks, freeing you to concentrate on the overarching goals that matter most.
                </p>
                <div className="md:flex justify-center mt-8 pl-10">
                    <div className="md:w-1/2 pr-4">
                    <ul className=" text-lg">

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                 No Training Time
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                 No Office Space Needed
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                Stress-Free Management
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                Pay Only For 100% Productive Time, Minimizing Downtime Expenses
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                No Furniture, Equipment or Electricity Costs
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                No Insurance Expenses
                                </div>
                              </div>
                              {/* <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Returns Processing</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Customer Service</strong> </li> */}
                        {/* <li className="flex left-10 w-4 mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700  p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        No Training Time
                        </li>
                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700  p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        No Office Space Needed
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700  p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        Stress-Free Management
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700 p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        Pay Only For 100% Productive Time, Minimizing Downtime Expenses
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700  p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        No Furniture, Equipment or Electricity Costs
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700 p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        No Insurance Expenses
                        </li> */}

                        
                        {/* Add more list items as needed */}
                    </ul>
                    </div>
                    <div className="md:w-1/2 md:pl-4">
                    <ul className=" text-lg">


                            <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>
                                    &#10004;
                                    </strong>
                                
                                </div>
                                <div className='w= 4/5 mt-2'>
                                Experience significant cost savings compared to hiring a full-time employee
                      
                                </div>
                            </div>

                            <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                Better life and work balance
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                        <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                No extended medical benefits
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                More quality time available for children and family
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                    <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                No contracts or long-term commitments
                                </div>
                              </div>

                              <div className='flex p-1'>
                                <div className='w=1/5 m-2' style={{ fontSize: '18px' }}>
                                <strong>&#10004;</strong>
                                </div>
                                <div className='w= 4/5 mt-2'>
                                Less stress
                                </div>
                              </div>

                        {/* <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700 p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        Experience significant cost savings compared to hiring a full-time employee
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700  p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        Better life and work balance
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700 p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        No extended medical benefits
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700 p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        More quality time available for children and family
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700 p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        No contracts or long-term commitments
                        </li>

                        <li className="flex items-center mb-4">
                        <span className="icon-wrapper circle-no bg-stone-700 p-2 rounded-full mr-4">
                            <i className="fas fa-check"></i>
                        </span>
                        Less stress
                        </li> */}
                        {/* Add more list items as needed */}
                    </ul>
                    </div>
                    {/* Add more columns as needed */}
                </div>

                
                {/* <p className=" text-lg pl-150 pr-150">
                Our services cater to the needs of busy professionals striving to expand their businesses. We specialize in handling essential yet time-consuming tasks, freeing you to concentrate on the overarching goals that matter most.
                </p> */}
                
                <div className="mt-8 text-center">
                    <button
                    onClick={handleButtonClick}
                    className='bg-blue-500 hover:bg-blue-700  transform transition-transform duration-300 ease-in-out hover:scale-105 text-white font-bold py-2 px-4 rounded-md inline-block'>
                        Learn More
                    </button>
                    {/* <a href="#" target="_self" className="bg-blue-500 hover:bg-blue-700  transform transition-transform duration-300 ease-in-out hover:scale-105 text-white font-bold py-2 px-4 rounded-md inline-block">Learn More</a> */}
                </div>
                </div>
            </div>
      
    </div>
  )
}

export default VirtualAssistant
