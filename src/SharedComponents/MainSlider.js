import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MainSlider(props) {
    const showLegend = props.showLegend ? props.showLegend : false
    const showThumb = props.showThumb ? props.showThumb : false
    const thumbWidth = props.thumbWidth ? props.thumbWidth : 100
    const imageHeight = props.imageHeight ? props.imageHeight : ""
    const centerSlidePercentage = props.centerSlidePercentage ? props.centerSlidePercentage : 100
    const width = props.width ? props.width : "100%"
    return (
        <Carousel showThumbs={showThumb} emulateTouch={true} infiniteLoop={true} thumbWidth={thumbWidth} centerSlidePercentage={centerSlidePercentage} centerMode={true} width={width}>
            {props.images.images && props.images.images.length>0 && props.images.images.map((p, index) => {
                return(
                <div key={index}>
                    <img src={p.path} height={imageHeight} alt=""/>
                    {showLegend && (<p className="legend">{p.legend}</p>)}
                </div>)
            })}
        </Carousel>
    )
}
