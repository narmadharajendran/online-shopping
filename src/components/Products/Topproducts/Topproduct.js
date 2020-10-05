import React from 'react'
import classes from './Topproduct.module.css'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const TopProduct=(props)=>{
    let star=[1,2,3,4,5]
    return(
        <div className={classes.container}>
            {props.src ?<img src={require(`../../../assets/topproducts/${props.src}`)} className={classes.contentImage} alt='Topprdoucts' height='100%' width="60px"/>
            :<img src={props.image} className={classes.contentImage} alt='Topprdoucts' height='100%' width="60px"/>
            }
            <div className={classes.content}>
                <p className={classes.productName}>{props.name}</p>
                <div className={classes.stars}>
                    {star.map(star=>(
                        <FontAwesomeIcon icon={faStar} className={classes.star}/>
                    ))}
                </div>
                <p className="m-0">${props.price}</p>
            </div>
        </div>
    )
}
export default TopProduct