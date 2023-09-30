/* eslint-disable react/prop-types */

import { useState } from "react"
import { LeftArrow } from "../icons/LeftArrow"
import { RightArrow } from "../icons/RightArrow"


export function ImageSlider ( {images} ) {
  const [active, setActive] = useState(0)

  const nextSlide = () => {
    setActive( active == images.length - 1 ? 0 : active+1 )
  }

  const prevSlide = () => {
    setActive( active == 0 ? images.length - 1 : active-1 )
  }

  const toIndex = (index) => {
    setActive(index)
  }

  return (
    <div className="slider">

      <LeftArrow className="left-arrow" onClick={prevSlide} />
      {images.map((image, index) => {
        return(
          <div key={index} className={active == index ? "slide-active" : "slide"} id={index} >
            {active == index && (
              <img src={image.src} alt={image.alt} className="slide-img"/>
            )}
          </div>
        )
      })}
      <div className="selectors">
        {images.map((image, index)=>{
          return(
            <button key={index}
              onClick={() => toIndex(index)}
              style={ active == index ? {backgroundColor: "rebeccapurple"} : {backgroundColor: "#f2f2f2"}}>
            </button>
          )})}
      </div>
      <RightArrow className="right-arrow" onClick={nextSlide}/>
    </div>
  )

}