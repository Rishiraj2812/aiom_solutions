import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  /* Add other styles as needed */
`;

    const images = [
      { id: 1, src: 'src/images/1.png', alt: 'Image 1', text: 'Enhance customer service excellence' },
      { id: 2, src: 'src/images/2.png', alt: 'Image 2', text: 'Product policy Complaince ' },
      { id: 3, src: 'src/images/3.png', alt: 'Image 3', text: 'Negative feedback Removal ' },
      { id: 4, src: 'src/images/4.png', alt: 'Image 4', text: 'Orders with defect rate ' },
      { id: 5, src: 'src/images/5.png', alt: 'Image 5', text: 'Manage Account Health ' },
      { id: 6, src: 'src/images/6.png', alt: 'Image 6', text: 'Shipping Performance ' },
    //   { id: 7, src: 'src/images/1.png', alt: 'Image 7', text: 'Description 7' },
    //   { id: 8, src: 'image8.jpg', alt: 'Image 8', text: 'Description 8' },
    ];

const Safe = () => {
  return (

    <div>
    <div className="py-8 bg-stone-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-stone-700">
        <StyledContainer>We keep your account Safe </StyledContainer>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-48 items-center text-center">
        {images.map((image) => (
          <div key={image.id} className="mx-4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-20 h-20 md:w-20 md:h-20 mb-5 lg:w-40 lg:h-40 mx-auto"
            />
            <figcaption className="text-stone-700 text-md">{image.text}</figcaption>
          </div>
        ))}
      </div>
    </div>
  </div>


  )
}

export default Safe
