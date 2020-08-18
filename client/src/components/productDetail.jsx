import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import kR from '../unnamed.jpg'
import {productDetail,getItem} from '../actions/candidateAction'
import './style.css'
class ProductDetail extends Component {

componentDidMount() {
  this.props.match.params.product_id ?
    this.props.productDetail(this.props.match.params.product_id)
    :
    this.props.getItem(this.props.match.params.cart_id)
}


  render(){
    const {product} = this.props.product
    return(
      <div class="main-content">
      <section class="blog_area section-padding">
      <div class="container">
      <div class="row">
      <div class="col-lg-8 mb-5 mb-lg-0">
      <div class="blog_left_sidebar">

      <article class="blog_item">
      <div class="blog_item_img">
      <img class="card-img rounded-0" src={kR} alt=""/>
      <Link  class="blog_item_date">
      <p>#{product.price}</p>
      </Link>
      </div>

      <div class="blog_details">
      <Link class="d-inline-block" >
      <h2>{product.name}</h2>
      </Link>
      <p>{product.detail}</p>

      </div>
      </article>
      </div>
      </div>
      <div class="col-lg-4">
      <div class="blog_right_sidebar">
      <aside class="single_sidebar_widget search_widget">
      <form onSubmit={this.handleSubmit}>
      <h4>Update News</h4>
      <div class="form-group">
      <div class="input-group mb-3">
      <input onChange={this.handleChange} value={this.state.title}  type="text" id="text-input" name="title" placeholder="Change Title" class="form-control-sm form-control"/>
      </div>
      <textarea onChange={this.handleChange} value={this.state.content}  name="content" id="textarea-input" rows="9" placeholder="Content..." class="form-control-sm form-control"></textarea>
      </div>
      <div className='row'>
      <div className='col'>
      <input class="btn btn-outline-primary btn-block" type="submit" value='Update'/>
      </div>
      <div className='col'>
      <input onClick={this.handleDelete} class="btn btn-outline-danger btn-block" type="button" value='Delete'/>
      </div>
      </div>
      </form>
      </aside>


      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
    )
  }
}
ProductDetail.propTypes = {
  productDetail: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    product: state.product
  }
}
export default connect(mapStateToProps,{productDetail,getItem})(ProductDetail)
