import React from "react";
import {ListGroup} from "react-bootstrap";
import classes from "../../../containers/Products/Default/Default.module.css";

const ListItem=()=>{
    return(
        <>
            <ListGroup.Item  className={["pl-0",classes.listItem,classes.active]} action href="/Books">Books</ListGroup.Item>
            <ListGroup.Item className={["pl-0",classes.listItem,classes.active]} action href="/Tshirts">Hoodie / T-shirts</ListGroup.Item>
            <ListGroup.Item className={["pl-0",classes.listItem,classes.active]} action href='/Bags'>Bags</ListGroup.Item>
            <ListGroup.Item className={["pl-0",classes.listItem,classes.active]} action href='/Mics'>Mics</ListGroup.Item>
        </>
    )
}

export default ListItem