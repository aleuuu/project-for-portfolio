import React from "react"
import Search from '../icon/icons8-search-25.png'
import Burger from '../icon/icons8-menu-25 (2).png'

import {useRef, useEffect} from "react"
import {TweenMax, Power3} from 'gsap'

function Topbar(props) {

    let burger = useRef(null)
    let search = useRef(null)

    useEffect(() => {
        TweenMax.from(burger, 1.9, {opacity: 0, x: -400, ease: Power3.easeOut})
        TweenMax.from(search, 1.9, {opacity: 0, x: 400, ease: Power3.easeOut})
    },[])

    return(
        <div className="container">
            <div className="bar">
                <img 
                ref={el => burger = el}
                src={Burger}></img>
                <img 
                ref={el => search = el}
                src={Search}></img>
            </div>
        </div>
        
    )
}

export default Topbar