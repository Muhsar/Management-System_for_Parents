import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {cartList, deleteItem} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
import './style.css'
class Cart extends Component {

componentDidMount() {
    this.props.cartList()
}
handleDelete=id=>{
  this.props.deleteItem(id)
}
  render(){
    const {products} = this.props.products
    const CARTLIST = products.length ? (
      products.map(product=>{
        return(
          <tr>
            <td>
              <img src={kR} alt="Cart 1" class="rounded-circle img-fluid img-thumbnail img-size-32 mr-2" style={{width:'100px', height:'100px'}}/>
              {product.name}
            </td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              {product.total}
            </td>
            <td>
            <td class="text-right">
                <Link class="btn btn-info btn-sm m-1" to={"/cart/"+product._id}>
                    <i class="fas fa-pencil-alt">
                    </i>{' '}
                    Edit
                </Link>
                <button class="btn btn-danger btn-sm m-1" onClick={()=>this.handleDelete(product._id)}>
                    <i class="fas fa-trash">
                    </i>{' '}
                    Delete
                </button>
            </td>
            </td>
          </tr>
        )
      })
    ):(
      <tr className='alert alert-info col-md-12 m1 text-center'> <td colspan='5'>No Item Up for sale</td></tr>
    )
    return(
            <div class="main-content">
            <h3 className='text-center'>Cart List</h3>
            <div class="card">

              <div class="card-body table-responsive p-0">
                <table class="table table-striped table-valign-middle">
                  <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {CARTLIST}

                  </tbody>
                </table>
              </div>
            </div>
        </div>
    )
  }
}
Cart.propTypes = {
  cartList: PropTypes.object.isRequired,
  products: PropTypes.func.isRequired
}
const mapStateToProps= state => {
  return{
    products: state.products
  }
}
export default connect(mapStateToProps,{cartList, deleteItem})(Cart)
