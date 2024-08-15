import React from "react";
import '../../components/rendering/Card_teranary.css'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
function Card(){
    const flag=false;
    const icon=false;
    const photo=false;
    return(
        <>
        <div className="main">
            <div className="card_main">
                {/* <div className="like"><FaRegHeart /></div> */}
                <div className={`${flag ? 'like': 'like2'}`}>
                {
                    icon ? <FaRegHeart/>:<FaHeart/>
                }
                </div>
                <div className="image">
                    {
                        photo ?  <img src='bird.jpeg'></img> :  <img src='pigeon.jpeg'></img>
                    }
                </div>
                <div className="cutie">Heyy Cutiepie!❤️</div>
            </div>
        </div>
        </>
    )
}
export default Card;