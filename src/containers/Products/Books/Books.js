import React,{Component} from 'react'
import './Books.css'
import classes from './Books.module.css'
import {Button,Container, Row, Col,ListGroup,Dropdown} from "react-bootstrap";
import TopProduct from "../../../components/Products/Topproducts/Topproduct";
import ListedProduct from '../../../components/Products/Listedproduct/Listedproduct'
import {connect} from 'react-redux'

//for range slider
import RangeSlider from "../../../components/UI/Slider/Slider";

//for pagination
import Pagination from '../../../components/UI/Pagination/Pagination'

//for add products
import Modal from '../../../components/UI/Modal/Modal'
import AddProduct from "../../../components/Products/Addprodut/Addproduct";
import ListItem from "../../../components/UI/ListItem/ListItem";

class Books extends Component{
    state={
        products:this.props.books,
        currentPage:1,
        postsPerPage:9,
        addProduct:false,
        addedProduct:false
    }
    addProductHandler=()=>{
         this.setState({
            addProduct:true,
             products:this.props.books,
         })

    }
    addProducts=()=>{
        this.setState({
            addProduct:false,
            addedProduct:true,
            products:this.props.books,
        })
    }
    addProductCancelHandler=(e)=>{
        e.preventDefault();
        this.setState({
            addProduct:false,
        })
    }
    priceHighToLowOnClickHandler=()=>{
        let newProducts=this.props.books.sort((a,b)=>{
            return b.price - a.price
        })
        this.setState(prevState=>({
            ...prevState,
            products:newProducts,
            addedProduct:false
        }))
    }
    priceLowToHighOnClickHandler=()=>{
        let newProducts=this.props.books.sort((a,b)=>{
            return a.price - b.price
        })
        this.setState(prevState=>({
            ...prevState,
            products:newProducts,
            addedProduct:false
        }))
        // this.setState({
        //     products:newProducts,
        //     priceLowToHigh:true
        //
        // })
    }
    defaultPriceOnClickHandler=()=>{
        this.setState({
            products:this.props.books,
            addedProduct:false
        })
    }
    filterByPrice=(a,b)=>{
        let newProducts=this.props.books.filter(function (el) {
            return el.price >= a &&
               el.price<=b;
        });
        this.setState(prevState=>({
            ...prevState,
            products:newProducts,
            addedProduct:false
        }))
    }

   render() {
       // Get current posts
       let currentPosts=[]
       const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
       const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        if(this.state.addedProduct ? currentPosts = this.props.books.slice(indexOfFirstPost, indexOfLastPost):
            currentPosts = this.state.products.slice(indexOfFirstPost, indexOfLastPost))



        console.log(this.props.books,"products")
        console.log(this.state.products,"state")
       // Change page
       const paginate = pageNumber => {
           this.setState({
               currentPage:pageNumber
           })
       };
       return(
           <div className={classes.container}>
               <style type="text/css">
                   {`
                        .btn-dropdown {
                        background: #929fad33;
                        outline: none;
                        border: 1px solid #929fad;
                        
                   }
                   .btn-list{
                        background:#f0f1f3;
                        outline:none;
                   }
                        `}
               </style>
               <Container fluid>
                   <Modal show={this.state.addProduct} modalClosed={this.addProductCancelHandler}>
                       <AddProduct modalClosed={this.addProductCancelHandler} addProduct={this.addProducts}/>
                   </Modal>
                    <Row className="ml-0 mr-0 mt-3">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className={[classes.pageHeading]}>
                            <h4>Products</h4>
                            <Button variant="danger" onClick={this.addProductHandler}  className="ml-auto">Add Product</Button>
                        </Col>
                    </Row>
                   <Row className={["ml-0","mr-0",classes.mainContent]}>
                       <Col xs={3} sm={3} md={3} lg={3} xl={3} className={[classes.sideCategoriesContainer]}>
                           <p className={classes.sideCategoriesHeading}>CATEGORIES</p>
                           <div className={classes.sideCategories}>
                               <ListGroup  variant="flush">
                                    <ListItem/>
                               </ListGroup>
                           </div>
                           <div className={classes.priceSliderContainer}>
                                <RangeSlider filterbyprice={this.filterByPrice}/>
                           </div>
                           <div className={classes.topProducts}>
                               {
                                   this.props.topProducts.map(products=>(
                                       <div>
                                           {products.src ? <TopProduct src={products.src} name={products.name} price={products.price} id={products.price}/>
                                           :<TopProduct image={products.image} name={products.name} price={products.price} id={products.price}/>
                                           }
                                       </div>
                               ))}
                           </div>
                       </Col>
                       <Col xs={9} sm={9} md={9} lg={9} xl={9} >
                           <Row className="m-0">
                               <Col className={["p-0",classes.mainCategoriesHeading]} xs={12} sm={12} md={12} lg={12} xl={12} >
                                   <p>Showing 1-8 of 9 results</p>
                                   <Dropdown  className="ml-auto">
                                       <Dropdown.Toggle variant="dropdown"  id="dropdown-basic">
                                           Default sorting
                                       </Dropdown.Toggle>

                                       <Dropdown.Menu>
                                           <Dropdown.Item onClick={this.defaultPriceOnClickHandler} >Default</Dropdown.Item>
                                           <Dropdown.Item onClick={this.priceHighToLowOnClickHandler} >Price High to low</Dropdown.Item>
                                           <Dropdown.Item onClick={this.priceLowToHighOnClickHandler} >Price Low to High</Dropdown.Item>
                                       </Dropdown.Menu>
                                   </Dropdown>
                               </Col>
                           </Row>
                               <Row className="mt-3">
                                   {/*<div className={[classes.mainCategoriesContainer]}>*/}
                                   {

                                        currentPosts.map( products => (
                                           <Col className={classes.productContainer}  xs={12} sm={12} md={4} lg={4} xl={4} id={products.price}>
                                               <div className={classes.product}>
                                                   {products.src ?
                                                       <ListedProduct src={products.src} name={products.name} price={products.price} category='books'/>:
                                                       <ListedProduct image={products.image} name={products.name} price={products.price}/>
                                                   }
                                               </div>
                                           </Col>
                                       ) )
                                   }
                                   {/*</div>*/}
                               </Row>
                       </Col>
                   </Row>

                   <div className={classes.pagination}>
                       <Pagination
                           postsPerPage={this.state.postsPerPage}
                           totalPosts={this.state.products.length}
                           paginate={paginate}
                       />
                   </div>
               </Container>
           </div>
           )


   }
}
const mapStateToProps=(state)=>{
    return{
        books:state.products.books,
        topProducts:state.products.topProducts
    }
}
const mapDispatchToprops=dispatch=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToprops)(Books)