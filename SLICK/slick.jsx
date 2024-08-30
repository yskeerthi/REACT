import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slik()
{
    const settings={
        dots:true,
        slideToShow:2,
        slidesToScroll:1,
        infinite:true,
        speed:400,
        responsive:[
            {
                breakpoint:700,
                settings:{
                    dots:false,
                    slideToShow:2,
                    slidesToScroll:2,
                    infinite:true,
                    speed:400,
                }
            }
        ]
    }
    return(
        <>
        <h1>react slick</h1>
         <Slider {...settings}>
      <div>
       <div style={{height:'300px' ,backgroundColor:"red"}}>Slide-1</div>
      </div>
      <div>
      <div style={{height:'300px' ,backgroundColor:"black"}}>Slide-2</div>
      </div>
      <div>
      <div style={{height:'300px' ,backgroundColor:"red"}}>Slide-3</div>
      </div>
      <div>
      <div style={{height:'300px' ,backgroundColor:"red"}}>Slide-4</div>
      </div>
      <div>
      <div style={{height:'300px' ,backgroundColor:"red"}}>Slide-5</div>
      </div>
      <div>
      <div style={{height:'300px' ,backgroundColor:"red"}}>Slide-6</div>
      </div>
    </Slider>
        </>
    )
}
export default Slik;