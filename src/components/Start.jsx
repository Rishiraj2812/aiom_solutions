import React from 'react'

const Start = () => {                                                                   
  return (
    <div>
        <div className='bg-stone-200 text-stone-700'>
            <div className="container pt-10 items-center">
                <div className="text-center items-center">
                    <h2 className="text-3xl font-bold mb-8">START DELEGATING WORK</h2>
                    {/* <p className="text-center text-lg">Help us grow your brand on AMZ. We let you focus on the important tasks of your business, while our VAs manage the administrative and time-consuming ones.</p> */}
                </div>
            </div>  

            <div className="container mx-auto items-center md:pl-20 md:pr-20">

            <div className='md:flex md:flex-wrap  justify-center'>

                <div className="md:w-1/2 lg:w-1/4 p-4 md:m-1 transform transition-transform duration-500 ease-in-out hover:scale-105">
                    <div className="bg-transparent mx-auto rounded-lg shadow-md overflow-hidden text-center h-50 w-64">
                        <img
                            src='https://img.freepik.com/free-photo/finger-pushing-virtual-button_1134-264.jpg?w=996&t=st=1703594369~exp=1703594969~hmac=ce98b6f83b6c786def5e2b679d0bc5ef57a5af148099244d07b9e53fa78782fe'
                             alt="Service Image"
                            className="w-full h-40 mx-auto object-cover"
                        />
                        <h5 className="text-lg m-4 text-center bg-transparent font-bold text-stone-700">Contact Us</h5>
                        
                    </div>
                </div>

                <div className=" md:w-1/2 lg:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
                    <div className="bg-transparent mx-auto rounded-lg shadow-md overflow-hidden text-center h-50 w-64">
                        <img
                            src='https://img.freepik.com/free-photo/businessperson-s-hand-marking-check-box-with-red-marker-screen_23-2147838609.jpg?w=826&t=st=1703594498~exp=1703595098~hmac=f60dae72b897fd537e163f625015a41543bbbe70bf95872e427886e79fd40c2c'
                             alt="Service Image"
                            className="w-full h-40 mx-auto object-cover"
                        />
                        <h5 className="text-lg p-4 text-center font-bold text-stone-700">Select Package </h5>
                          
                    </div>
                           
                </div>


                <div className=" md:w-1/2 lg:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
                    <div className="bg-transparent mx-auto rounded-lg shadow-md overflow-hidden text-center h-50 w-64">
                        <img
                            src='https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300643.jpg?w=996&t=st=1703594576~exp=1703595176~hmac=572581fbdf75846dfb81c5dc008088447f97dc5642aa086f0f6c6918bc7b26b2'
                             alt="Service Image"
                            className="w-full h-40 object-cover"
                        />
                        <h5 className="text-lg font-bold p-4 text-center text-stone-700">Entrust and oversee</h5>
                 
                        
                    </div>
                </div>

            </div>   

            </div>

            
        </div> 
    </div>
  )
}

export default Start
