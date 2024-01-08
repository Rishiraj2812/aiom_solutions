// Payment.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  /* Add other styles as needed */
`;




const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const HoverBorderRow = () => {
        const rowStyle = {
        borderBottom: '2px solid transparent', // Initial invisible border
        };
    
        const handleHover = () => {
        rowStyle.borderBottom = '2px solid #e2e8f0'; // Change border color on hover
        };
    
        const handleLeave = () => {
        rowStyle.borderBottom = '2px solid transparent'; // Reset border on leave
        };
    }  

  return (
    <div className=" mx-auto  bg-stone-700  py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
      
        <StyledContainer className='text-white m-4'>Choose Your Plan</StyledContainer></h1>

      <div className="grid lg:grid-cols-2  mx-auto  my-5 justify-center items-center">
        {/* Basic Plan */}


                    <div className=" bg-stone-100 border border-gray-300 text-stone-700 mx-auto rounded-md m-4 w-80 ">
                       
                          <div className=" text-2xl font-bold flex items-center justify-center mb-6 bg-gray-200 p-2 w-full h-16 rounded-md ">
                             <StyledContainer>
                            Part Time
                            </StyledContainer>
                          </div>

                          <div className=" mb-6 p-6 ">
                          <ul className="list-none list-inside">
                            {/* <span>&#10003;</span> */}
                            <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Suspension or ASIN appeal not    included</strong> </li>
                            <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>4 to 5 Hours/Day</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Product Listing Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Product Description Writing</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Product Image Optimisation</strong></li>
                              {/* <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Enhanced Brand Content(EBC)</strong></li> */}
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>PPC Set up Only</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Returns Processing</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Customer Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                             
                              
                              
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>-</strong> </li>
                             
                            </ul>
                          </div>

                          <div className=" text-center items-center p-4 rounded-md mb-4">
                            
                              <span className="price-membership-card-alt-price-total font-bold text-lg">
                              <StyledContainer>Free Trial
                                
                              <span className="price-membership-card-alt-price-trial-total ml-2">$0.00</span>

                              </StyledContainer>
                                
                              </span>
                              <span className="price-membership-card-alt-price-monthly price-membership-card-alt-trial block mt-2 text-sm text-gray-600">
                              $395.00<sup>/mo*</sup> after 7 days
                              </span>
                            
                          </div>

                          {/* <div className="text-center items-center justify-center">
                            <a
                              href="#"
                              className="w-64 h-14 rounded-lg bg-white border-stone-200 border-b-4 hover:bg-stone-200 hover:border-stone-400 hover:cursor-pointer transition-all duration-300  items-center justify-center"
                              type="button"
                            >
                              
                               <StyledContainer className='font-extrabold text-xl mt-4'>
                                Try Plan
                              </StyledContainer>
                          
                            </a>
                            <span className="block mt-2 text-sm">*when billed yearly</span>
                          </div> */}

                    </div>


                    <div className=" bg-stone-100 border border-gray-300 mx-auto text-stone-700 rounded-md m-4 w-80 ">
                       
                          <div className=" text-2xl font-bold flex items-center justify-center mb-6 bg-gray-200 p-2 w-full h-16 rounded-md ">
                             <StyledContainer>
                            Full Time
                            </StyledContainer>
                          </div>

                          <div className=" mb-6 p-6 ">
                          <ul className="list-none list-inside">
                            {/* <span>&#10003;</span> */}
                            <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Suspension or ASIN appeal not included</strong> </li>
                            <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>8 Hours/Day</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Product Listing Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Product Description Writing</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Product Image Optimisation</strong></li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Enhanced Brand Content(EBC)</strong></li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>PPC Set up Only</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Returns Processing</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Customer Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Discount Listing Services</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Social Media Management</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>eBay Listing Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Fruugo Listing Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Etsy Listing Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Onbuy Listing Service</strong> </li>
                              <li className="membership-available p-1"><strong><span style={{ fontSize: '18px' }} className='m-2'>&#10004;</span>Discount Listing Service</strong> </li>
                              
                             
                            </ul>
                          </div>

                          <div className=" text-center items-center p-4 rounded-md mb-4">
                            
                              <span className="price-membership-card-alt-price-total font-bold text-lg">
                              <StyledContainer>Free Trial
                                
                              <span className="price-membership-card-alt-price-trial-total ml-2">$0.00</span>

                              </StyledContainer>
                                
                              </span>
                              <span className="price-membership-card-alt-price-monthly price-membership-card-alt-trial block mt-2 text-sm text-gray-600">
                                $595.00<sup>/mo*</sup> after 7 days
                              </span>
                            
                          </div>

                          {/* <div className="text-center items-center justify-center">
                            <a
                              href="#"
                              className="w-64 h-14 rounded-lg bg-white border-stone-200 border-b-4 hover:bg-stone-200 hover:border-stone-400 hover:cursor-pointer transition-all duration-300  items-center justify-center"
                              type="button"
                            >
                              
                               <StyledContainer className='font-extrabold text-xl mt-4'>
                                Try Plan
                              </StyledContainer>
                          
                            </a>
                            <span className="block mt-2 text-sm">*when billed yearly</span>
                          </div> */}

                    </div>


      
      </div>

      {selectedPlan && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Selected Plan: {selectedPlan}</h2>
        </div>
      )}
    </div>
  );
};

export default Payment;
