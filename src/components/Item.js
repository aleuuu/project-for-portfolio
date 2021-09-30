import React from 'react'
import Cup from '../img/pngwing.com.png'


function Item(props) {

    return(
        <div className="rowItem">
            <div className="rowItemBack" style={{backgroundColor: props.back}}>
                <img src={props.image}></img>
            </div>
            <div className="descrription">
                <div className="rowD">
                   <p>{props.name}</p>
                   <p>{props.description}</p>
                </div>
                
                <p className="price">{props.value}</p>
            </div>
            
        </div>
    )
}

export default Item