import React, { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./image-slider.css"

const ImageSlider = ({imageUrls}) => {
    const [imageIndex, SetImageIndex] = useState(0);
    function showNextImage() {
        SetImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        SetImageIndex(index => {
            if (index === 0) return imageUrls.length -1
            return index - 1
        })
        
    }


  return (
    <>
       <div style={{ position: "relative", width: "100%", height: "100%"}}>
            <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
                {imageUrls.map(url => (
                    <img key={url} src={url} alt="" className='img-slider-img' style={{
                        translate: `${-100 * imageIndex}%`
                    }}/>
                ))}
            </div>
            
            <button onClick={showPrevImage} className='img-slider-btn' style={{left: 0}}>
                <ArrowBigLeft />
            </button>
            <button onClick={showNextImage} className='img-slider-btn' style={{right: 0}}>
                <ArrowBigRight />
            </button>
            <div style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                display: "flex",
                gap: ".25rem"
            }}>
                {imageUrls.map((_, index) => (
                    <button key={index} className='img-slider-dot-btn' onClick={() => SetImageIndex(index)}>
                        {index === imageIndex ? <CircleDot /> :<Circle />}
                    </button>
                ))}
            </div>
       </div>
    </>
  )
}

export default ImageSlider