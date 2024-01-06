import React, { useState } from 'react'

const Listing = () => {

  return (
    <div>
             {/* first */}
             <div className="md:flex items-center bg-stone-700 ">
                {/* Left side with text */}
                <div className="md:w-1/2 p-8">
                  <h1 className="text-4xl font-bold mb-4 text-stone-300">AMAZON LISTING SERVICE</h1>
                  <p className="text-lg text-stone-200">Managing customer service on Amazon involves overseeing and optimizing the interactions between sellers and customers on the Amazon platform. Rest assured, we guarantee professional and timely responses. Amazon places a high value on customer service.
                 
                  </p>
                </div>
          
                {/* Right side with image */}
                <div className="md:w-1/2 items-center">
                  <img
                     src="https://img.freepik.com/free-photo/seo-website-development-data-network-concept_53876-127578.jpg?w=1060&t=st=1703528001~exp=1703528601~hmac=8b1ac727a240e69405aeedb5114618423a26791beefd6c2570509ad483b89411"  // Replace with the path or URL of the image for Card 1
                     // Use the prop for the image source
                    alt="Card Image"
                    className="mx-auto p-16 max-w-full h-auto "
                  />
                </div>
              </div>


             {/* second */}

              <div className="md:flex items-center bg-stone-200 ">
    
                <div className="md:w-1/2">
                  <img
                   src="https://img.freepik.com/free-photo/register-enquiry-online-web-page-concept_53876-124773.jpg?w=1060&t=st=1703528288~exp=1703528888~hmac=1eeda50437d5659670a8cbe6c65ed7ac03303784581e6f318eddf417d54b5361"  // Replace with the path or URL of the image for Card 2
                      // Use the prop for the image source
                    alt="Card Image"
                    className="mx-auto p-16 max-w-full h-auto"
                  />
                </div>
    
                <div className="md:w-1/2 p-8 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">CUSTOMER SERVICE</h1>
                <p className="text-lg text-stone-700">Managing customer service on Amazon involves overseeing and optimizing the interactions between sellers and customers on the Amazon platform. Rest assured, we guarantee professional and timely responses. Amazon places a high value on customer service.</p>
              </div>
              </div>



              <div className="md:flex items-center bg-stone-700 ">
                {/* Left side with text */}
                <div className="md:w-1/2 p-8 text-center">
                  <h1 className="text-4xl font-bold mb-4 text-stone-300">PPC MANAGEMENT </h1>
                  <p className="text-lg text-stone-200">By leveraging PPC management on Amazon, sellers can optimize their advertising campaigns, drive traffic, and ultimately increase sales while maintaining control over their advertising budget and strategy.
                 
                  </p>
                </div>
          
                {/* Right side with image */}
                <div className="md:w-1/2">
                  <img
                     src="https://img.freepik.com/free-photo/business-commercial-corporate-development-concept_53876-124899.jpg?w=740&t=st=1703529365~exp=1703529965~hmac=3e558655dc267d8e2d6506443a308f764377f148d0d288f4e9831e9a29a6c802"
                    alt="Card Image"
                    className="mx-auto p-20 max-w-full h-auto "
                  />
                </div>
              </div>




              <div className="md:flex items-center bg-stone-200 ">
    
    <div className="md:w-1/2">
      <img

      src='https://img.freepik.com/free-photo/medium-shot-specialized-photographer-working-studio_23-2150247206.jpg?w=996&t=st=1703529579~exp=1703530179~hmac=eb099ebbe33177f8a92daf03b238256d90e638d72fd6ff1094e2eb165b50740a'
          // Use the prop for the image source
        alt="Card Image"
        className="mx-auto p-16 max-w-full h-auto"
      />
    </div>

    <div className="md:w-1/2 p-8 text-center">
    <h1 className="text-4xl font-bold mb-4 text-stone-700">A+ (EBC) </h1>
    <p className="text-lg text-stone-700">Utilizing A+ Content, sellers can create a more compelling and informative shopping experience, ultimately boosting sales and customer satisfaction on the Amazon platform.</p>
  </div>
  </div> 



         <div className="md:flex items-center bg-stone-700 ">
                {/* Left side with text */}
                <div className="md:w-1/2 p-8 text-center">
                  <h1 className="text-4xl font-bold mb-4 text-stone-300">ACCOUNT HEALTH MANAGEMENT </h1>
                  <p className="text-lg text-stone-200">Maximizes your account's performance through proactive monitoring. Identifies and addresses potential issues to mitigate risks of account suspension or penalties.
                  </p>
                </div>
          
                {/* Right side with image */}
                <div className="md:w-1/2">
                  <img
                  src='https://img.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1423-68.jpg?w=996&t=st=1703529662~exp=1703530262~hmac=4023ac4d8fde6723518f4278751e4c9b235bfa421c829f3434a5699167ea105a'
                    // Use the prop for the image source
                    alt="Card Image"
                    className="mx-auto p-16 max-w-full h-auto "
                  />
                </div>
              </div>

  </div>

  

  )
}

export default Listing
