import React from "react"

import {useRef, useEffect} from "react"
import {TweenMax, Power3} from 'gsap'

function Header(props) {

    let row = useRef(null)

    useEffect(() => {
        TweenMax.from(row, 1.5, {opacity: 0, y: -50, ease: Power3.easeInOut, delay: .6})
    },[])
    

    return(
        <div className="container">
            <div className="header"
            ref={el => row = el}
            >
                <h2>Home</h2>
                <ul>
                    <li>Sort by:</li>
                    <li>Price</li>
                    <li>Raiting</li>
                    <li id='last'>Brand</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header