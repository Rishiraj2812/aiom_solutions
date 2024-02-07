import React, { useEffect } from 'react'
const Contact = () => {
  
  useEffect(()=>{
    window.scroll(0, 0)
  }, [])
  
  return (
    <div className="container mx-auto p-8 bg-gray-100 mt-20">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>


      {/* Additional Contact Information */}
      <div className="my-8 ">
        <h2 className="text-2xl font-bold mb-4">Additional Contact Information</h2>

        <p className="text-gray-700 ">
          For urgent matters or alternative ways to reach us, you can use the following:
        </p>

        <ul className="list-disc list-inside">
          <li>Email: aiomsolutions.uk@gmail.com</li>
          <li>Phone: +91 95103 17081</li>
          <li>Phone: +91 95105 20443</li>
          <li>Phone: +91 96876 41388</li>
          {/* <li>Address: 123 Main Street, Cityville</li> */}
        </ul>
        <div className='border-t-2 mt-8'>
          <p className="text-gray-700 mt-4">
           Reach out to us regarding any query.
          </p>
        </div>
      </div>

      



  

      <form className="max-w-md mx-auto mt-10">
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Name"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
          />
        </div>

     
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Message</label>
          <textarea
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>

       
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      
    </div>


    
  )
}

export default Contact
