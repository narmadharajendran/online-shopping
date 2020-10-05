import React from 'react'
import classes from "../../../containers/Products/Default/Default.module.css";

const Listproduct=props=>{
    return(
        <>
            {props.src ?
                <img src={require(`../../../assets/${props.category}/${props.src}`)} alt="bookimage" height="180px" width="100%"/> :
                <img src={props.image} alt="bookimage" height="180px" width="100%"/>}
            <div className={classes.productDetails}>
                <p className="m-0" style={{fontWeight:'bold'}}>{props.name}</p>
                <div className={classes.priceDetails}>
                    <p className="m-0">${props.price}</p>
                </div>
            </div>
        </>
    )
}

export default Listproduct