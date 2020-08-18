import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getClassBill} from '../actions/candidateAction'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
class ClassBill extends Component {
  UNSAFE_componentWillMount() {
    const decode = jwt_decode(localStorage.token)
    this.props.getClassBill(decode.clas)
  }

  render(){
    const {classBill} = this.props.classBill

    return(
            <div class="main-content">
            <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0 mx-auto">
                        <div class="blog_left_sidebar">
                        <article class="blog_item">
                        <div class="card">
                        <div class="card-header">
                        <strong class="card-title">{classBill.clas}</strong>
                        </div>
                        <div class="card-body">
                        <table class="table table-bordered">

                        <tbody>
                        <tr>
                        <td colspan='3'>School Fees</td>
                        <td>#{classBill.fees}</td>
                        </tr>
                        <tr>
                        <td colspan='3'>Uniform</td>
                        <td>#{classBill.uniform}</td>
                        </tr>
                        <tr>
                        <th></th>
                        <th>No. Of Exercise Books Needed</th>
                        <th>Price Per book</th>
                        <th>Total</th>
                        </tr>
                        <tr>
                        <th>Exercise Book</th>
                        <th>{classBill.exerciseBooks}</th>
                        <th>#{classBill.pricePerBook}</th>
                        <th>#{classBill.exerciseBooks*classBill.pricePerBook}</th>
                        </tr>
                        <tr>
                        <th colspan='2'></th>
                        <th>No. Of Text Books Needed</th>
                        <th>Total Price</th>
                        </tr>
                        <tr>
                        <th colspan='2'>Text Books</th>
                        <th>{classBill.textBooks}</th>
                        <th>#{classBill.totalTextBookPrice}</th>
                        </tr>
                        <tr>
                        <th colspan='3'>Total</th>
                        <th>
                        #{classBill.fees+classBill.uniform+(classBill.exerciseBooks*classBill.pricePerBook)+classBill.totalTextBookPrice}
                        </th>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        </div>
                        </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
    )
  }
}
ClassBill.propTypes = {
  getClassBill:PropTypes.func.isRequired,
  classBill:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    classBill:state.classBill
  }
}
export default connect(mapStateToProps,{getClassBill})(ClassBill)
