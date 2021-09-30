import React from 'react'
import Item from './Item'

import {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

import {useSelector} from 'react-redux'


function Content(props) {


    const { items } = useSelector(({ card }) => card)

    let page = useRef(null)
    let filter = useRef(null)

    useEffect(() =>{
        TweenMax.from(page, 1.5, {opacity: 0, x: -400, ease: Power3.easeOut, delay: .6})
        TweenMax.from(filter, 1.5, {opacity: 0, x: -400, ease: Power3.easeOut, delay: .6})
    },[])


    return(
        <div className="container">
            <div className="content">
                <div className="row">
                    <h2
                    ref={el => page = el}
                    >Home decor</h2>
                    <button
                    ref={el => filter = el}
                    >Filter</button>
                </div>
                <div className="row">
                    {
                        items.map(item =>(
                            <Item key={item.id} {...item}/>
                        ))
                    }
                </div>
            </div>  
        </div>
        
    )
}

export default Content