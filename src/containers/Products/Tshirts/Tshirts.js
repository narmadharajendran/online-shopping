import React,{Component} from 'react'
import classes from '../Default/Default.module.css'
import {Button,Container, Row, Col,ListGroup,Dropdown} from "react-bootstrap";
import TopProduct from "../../../components/Products/Topproducts/Topproduct";
import {connect} from 'react-redux'

//for listitem
import ListItem from '../../../components/UI/ListItem/ListItem'
//for range slider
import RangeSlider from "../../../components/UI/Slider/Slider";

//for pagination
import Pagination from '../../../components/UI/Pagination/Pagination'

//for add products
import Modal from '../../../components/UI/Modal/Modal'
import AddProduct from "../../../components/Products/Addprodut/Addproduct";
import ListedProduct from "../../../components/Products/Listedproduct/Listedproduct";


class Default extends Component{
    state={
        products:this.props.tshirts,
        currentPage:1,
        postsPerPage:9,
        addProduct:false,
        addedProduct:false
    }
    addProductHandler=()=>{
        this.setState({
            addProduct:true,
            products:this.props.tshirts,
        })
    }
    addProductCancelHandler=(e)=>{
        e.preventDefault();
        this.setState({
            addProduct:false
        })
    }
    addProducts=()=>{
        this.setState({
            addProduct:false,
            addedProduct:true,
            products:this.props.tshirts,
        })
    }
    priceHighToLowOnClickHandler=()=>{
        let newProducts=this.props.tshirts.sort((a,b)=>{
            return b.price - a.price
        })
        this.setState(prevState=>({
            ...prevState,
            products:newProducts,
            addedProduct:false
        }))
    }
    priceLowToHighOnClickHandler=()=>{
        let newProducts=this.props.tshirts.sort((a,b)=>{
            return a.price - b.price
        })
        this.setState(prevState=>({
            ...prevState,
            products:newProducts,
            addedProduct:false
        }))
    }
    defaultPriceOnClickHandler=()=>{
        this.setState({
            products:this.props.tshirts
        })
    }
    filterByPrice=(a,b)=>{
        let newProducts=this.props.tshirts.filter(function (el) {
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
        console.log(this.props.topProducts,"topproducts")


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
                            <Button variant="danger" onClick={this.addProductHandler} className="ml-auto">Add Product</Button>
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
                                                    <ListedProduct src={products.src} name={products.name} price={products.price} category='tshirts'/>:
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
        tshirts:state.products.tshirts,
        topProducts:state.products.topProducts
    }
}
const mapDispatchToprops=dispatch=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToprops)(Default)