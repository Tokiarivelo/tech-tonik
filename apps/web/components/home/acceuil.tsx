import React from 'react'
import { images } from "./data/index";

const Slider = () =>

const Acceuil = () => {
  return (
    // Container
    <div>
      {/* Slider */}
      <div>
        {/* Image */}
        <div>
          {images.map((image, i)=>(
            <img 
            key={i}
            src={image}
            className={`w-full h-full absolute object-cover rounded-3xl transform-all duration-300 ${
              i === index ? 
            }`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Acceuil