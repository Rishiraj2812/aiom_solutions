import React from 'react'

const ServiceOffer = () => {
  return (
    <div>
      <div className='dark:bg-stone-700 dark:text-stone-300'>
        <div className="container pt-10">
            <div className="md:flex flex-col items-center">
                <h2 className="text-3xl text-center font-bold mb-8">SERVICES WE OFFER</h2>
                <p className="text-center text-lg">Help us grow your brand on AMZ. We let you focus on the important tasks of your business, while our VAs manage the administrative and time-consuming ones.</p>
            </div>
        </div>  

      <div className="container mx-auto  md:pl-20 md:pr-20">

     

        <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="bg-transparent mx-auto rounded-lg shadow-md overflow-hidden text-center h-50 w-64">
                  <img
                        src='/images/service/1.jpeg'
                    //   src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?w=1060&t=st=1703182310~exp=1703182910~hmac=a4ccc12b9f805f74ed67e933f9aad7d8b649481158708b7c39032dc1fcc6ade1" 
                      alt="Service Image"
                      className="w-full h-40 object-cover"
                  />
                   <h5 className="text-lg p-4 text-center font-bold text-stone-200">FULL MANAGEMENT</h5>
                 
              </div>
            
          </div>

            {/* <!-- Service Card 2 --> */}
            <div className="w-full md:w-1/2 xl:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="bg-transparent mx-auto rounded-lg shadow-md text-center overflow-hidden h-50 w-64">
                  <img
                         src='/images/service/2.jpeg'
                    //   src="https://img.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_616485-61.jpg?w=996&t=st=1703182381~exp=1703182981~hmac=d194a3f4746cc6b55fba5f7b0939db92348e6290a9532501dbd1ccb911e56a9f"
                      alt="Service Image"
                      className="w-full h-40 object-cover"
                  />
                  <h5 className="text-lg p-4 text-center font-bold text-stone-200">LISTING SERVICES</h5>
                  
              </div>
                
          </div>
            

          <div className="w-full md:w-1/2 xl:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="bg-transparent mx-auto rounded-lg shadow-md text-center overflow-hidden h-50 w-64">
                  <img
                         src='/images/service/3.jpeg'
                    //   src="https://img.freepik.com/free-photo/healthy-menu-recipe-food-diet_53876-122837.jpg?t=st=1703182415~exp=1703183015~hmac=94e6796ec536c99ece5ac3bcfcc74f60f8808d8487b813b1ae559b2c0155aae8"
                      alt="Service Image"
                      className="w-full h-40 object-cover"
                  />
                   <h5 className="text-lg p-4 text-center font-bold text-stone-200">EBC</h5>
                  
              </div>
            
          </div>

          <div className="w-full md:w-1/2 xl:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="bg-transparent mx-auto rounded-lg shadow-md text-center overflow-hidden h-50 w-64">
              <img
                src='/images/service/4.jpeg'
            //   src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?w=996&t=st=1703182490~exp=1703183090~hmac=da9d04b4d97f1230681ee67f332ccb56fdd6acecb62937a59efea3f583b00e13" 
              alt="Service Image" className="w-full h-auto"/>
              <h5 className="text-lg p-4 text-center font-bold text-stone-200">PPC MANAGEMENT</h5>
                  
              </div>
               
          </div>

           
          <div className="w-full md:w-1/2 xl:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="bg-transparent mx-auto rounded-lg shadow-md text-center overflow-hidden h-50 w-64">
              <img
               src="https://img.freepik.com/free-photo/female-cinematographer-editing-video-montage-post-production-studio-office-improving-footage-quality-creative-software-artist-designer-working-movie-film-filmmaking-industry_482257-63649.jpg?w=1060&t=st=1703182541~exp=1703183141~hmac=31fe2678ebacc46e220392e6d8e09578e565be9d28e75a05e102b8f320813d6a"
                alt="Service Image" className="w-full h-auto"/>
                      
              <h5 className="text-lg p-4 text-center font-bold text-stone-200">PRODUCT IMAGE OPTIMIZATION</h5>
          
              </div>
                 
          </div>

          <div className="w-full md:w-1/2 xl:w-1/4 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="bg-transparent mx-auto rounded-lg shadow-md text-center overflow-hidden h-50 w-64">
              <img
               src='/images/service/6.jpeg' 
            //   src="https://img.freepik.com/free-photo/guy-left-side-talking-colleagues-is-listening-him-group-young-freelancers-office-have-conversation-smiling_146671-13632.jpg?w=996&t=st=1703182573~exp=1703183173~hmac=5bca522441ee51634be5b77d56eb9504f8c80e4d98d3ca9de02b8bcd56a69de5"
               alt="Service Image" className="w-full h-auto"/>
              <h5 className="text-lg p-4 text-center font-bold text-stone-200">VENDOR CENTRAL MANAGEMENT</h5>
               
                  
              </div>
        
          </div>
        </div>
    </div>
     </div>
    </div>
  )
}

export default ServiceOffer
