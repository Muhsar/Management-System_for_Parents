import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {getProducts} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
import './style.css'
class Product extends Component {

componentDidMount() {
    this.props.getProducts()
}
  render(){
    const {products} = this.props.products
    const PRODUCTS = products.length ? (
      products.map(product=>{
        return(
          <div class="col-md-4 m1" key={product._id}>

              <article class="blog_item">
                  <div class="blog_item_img">
                      <img class="card-img rounded-0" src={kR} alt=""/>
                      <Link to={'/product/'+product.product_id} class="blog_item_date">
                          <p>{product.price}</p>
                      </Link>
                  </div>

                  <div class="blog_details">
                      <Link class="d-inline-block" to={'/product/'+product.product_id}>
                      <h2>{product.name}</h2>
                  </Link>
                  <p>{product.detail}</p>

                  </div>
              </article>

          </div>
        )
      })
    ):(
      <div className='alert alert-info col-md-12 m1 text-center'>No Item Up for sale</div>
    )
    return(
            <div class="main-content">
            <h3 className='text-center'>Products Page</h3>
            <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    {PRODUCTS}
                    </div>
                </div>
        </section>
        </div>
    )
  }
}
Product.propTypes = {
  getProducts: PropTypes.object.isRequired,
  products: PropTypes.func.isRequired
}
const mapStateToProps= state => {
  return{
    products: state.products
  }
}
export default connect(mapStateToProps,{getProducts})(Product)
