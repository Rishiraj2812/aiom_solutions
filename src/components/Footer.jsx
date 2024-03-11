import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10 ">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
        {/* Company Information */}
        <div className="md:flex items-center mb-8 md:px-4">
          {/* Company Logo */}
          <img
            src="/images/logo.png" 
            alt="Company Logo"
            className="h-24 w-auto mb-4 md:mb-0 md:mr-4 "
          />
        </div>

        <p className="mb-6 md:w-1/2 md:px-4">
        Welcome to AIOM Solutions – a trailblazer in digital innovation and strategic solutions.
         We specialize in providing comprehensive services to propel businesses into a new era of success.
          Our seasoned team of professionals is dedicated to delivering excellence across various domains,
           ensuring your brand not only thrives but leads in the digital landscape.
        </p>

        {/* Owner Details */}
        {/* <div className="mb-6">
          <h4 className="text-lg font-bold mb-2">Owners</h4>
          <ul>
            <li>Owner Name 1</li>
            <li>Owner Name 2</li> */}
            {/* Add more owners if needed */}
          {/* </ul> */}
        {/* </div> */}

        {/* Details about Services */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-bold mb-2 md:px-4">Services</h4>
          <ul className='list-disc'>
                <li>
                Amazon/ eBay/ Etsy/ Tiktok/ Onbuy/ Shopify Listing service

                </li>
                <li>
                ⁠Customer Service
                </li>

                <li>
                ⁠PPC Management
                </li>

                <li>
                 A+ (EBC)
                </li>

                <li>
                ⁠Product Image Optimization
                </li>

                <li>
                ⁠Account Health Management
                </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
