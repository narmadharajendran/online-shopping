import React from 'react'
import classes from './Addproduct.module.css'
import { useDispatch,useSelector } from 'react-redux'
const AddProduct=(props)=>{
    const dispatch = useDispatch();
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);
    const [value, setValue] = React.useState({
        title:"",
        price:"",
        image:"",
        category:"books",
        topProduct:false,
    });

    const handleClick = event => {
        event.preventDefault();
        hiddenFileInput.current.click();
    };
    const handleChange=(event)=>{
        console.log("entering")
        event.persist();
        setValue(prevValue => ({ ...prevValue, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }));
    }
    const handleSubmit=(event)=> {
        event.preventDefault();
        const product={
            name:value.title,
            price:value.price,
            image:value.image
        }
        const category=value.category
        dispatch({type:'ADD_PRODUCTS',
            product:product,
            category:category,
            topProduct:value.topProduct
        })
        props.addProduct()
    }
    const handleUpload=({target})=>{
        const reader = new FileReader();
        const file = target.files[0];
        reader.onload = (e) => {
            setValue(prevValue =>({...prevValue,image:reader.result}))
            // dispatch({ type: 'UPLOAD_IMAGE',
            //     image: reader.result,})
            // this.props.dispatch({
            //     type: 'UPLOAD_IMAGE',
            //k
            // });
        };
        reader.readAsDataURL(file);
    }

    return(
        <div className={classes.addProduct}>
            <h3 className={classes.title}>Add Product</h3>
            <form className={classes.form}>
                <label>
                    Product Title
                </label>
                <input type="text" name="title" value={value.title} onChange={handleChange} placeholder="Enter product tile" />
                <label>
                    Product Price
                </label>
                <input type="text" name="price" value={value.price} onChange={handleChange} placeholder="Enter product price"/>
                <label>
                    Product Category
                </label>
                <select name="category" value={value.category} onChange={handleChange}>
                        <option value="books">Books</option>
                        <option value="bags">Bags</option>
                        <option value="tshirts">Tshirts</option>
                        <option value="mics">Mics</option>
                </select>
                <label>
                <input
                    name="topProduct"
                    type="checkbox"
                    checked={value.topProduct}
                    onChange={handleChange} />  Top Products</label>
                <label>Upload Product Image</label>
                <button onClick={handleClick} className={classes.uploadImage}>
                    Upload
                </button>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    title=" "
                    value=""
                    style={{display:'none'}}
                    onChange = {handleUpload}
                />
                <hr/>
                <div className={classes.submitContainer}>
                    <button className={classes.save} onClick={handleSubmit}>SAVE</button>
                    <button className={classes.cancel} onClick={props.modalClosed}>CANCEL</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct

// const [user, setUser] = React.useState({ name: "", email: "", age: "" });
//
// // handle change event of the input
// const handleChange = e => {
//     e.persist();
//     setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
// }
// return(
//     <div>
//
//         <label>Email:</label>
//         <input type="text" name="email" value={user.email} onChange={handleChange}/>
//         <br></br>
//             <label>Age:</label>
//             <input type="text" name="age" value={user.age} onChange={handleChange}/>
//
//     </div>
// )