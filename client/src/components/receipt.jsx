import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {getReceipt} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode';
class Receipt extends Component {

  componentDidMount() {
    const decode = jwt_decode(localStorage.token)
    this.props.getReceipt(decode.student_id)
  }
  render(){
    const decode = jwt_decode(localStorage.token)
    const {receipt} = this.props.receipt
    console.log(receipt)
    const RECEIPT = receipt.length ? (receipt.map((receipt)=>{
      return(
        <section class="card" key={receipt._id}>
            <div class="card-header user-header alt bg-dark">
                <div class="media">
                        <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={kR}/>
                    <div class="media-body">
                        <h2 class="text-light display-6">{decode.name}</h2>
                    </div>
                </div>
            </div>
        <ul class="list-group list-group-flush" >

          <li class="list-group-item">
            <div className='row'>
              <div className='col'>Fullname:</div>
              <div className='col'>{receipt.surname+' '+receipt.name}</div>
            </div>
          </li>
            <li class="list-group-item">
              <div className='row'>
                <div className='col'>Identification Number:</div>
                <div className='col'>{receipt.student_id}</div>
              </div>
            </li>
            <li class="list-group-item">
            <div className='row'>
              <div className='col'>Class:</div>
              <div className='col'>{receipt.clas}</div>
            </div>
            </li>
            <li class="list-group-item">
            <div className='row'>
              <div className='col'>Class Fee:</div>
              <div className='col'>{receipt.fees}</div>
            </div>
            </li>
            <li class="list-group-item">
            <div className='row'>
              <div className='col'>Amount Paid:</div>
              <div className='col'>{receipt.paidAmount}</div>
            </div>
            </li>
            <li class="list-group-item">
            <div className='row'>
              <div className='col'>Amount Left:</div>
              <div className='col'>{receipt.fees - receipt.amountPaid}</div>
            </div>
            </li>
            <li class="list-group-item">
            <div className='row'>
              <div className='col'>Date:</div>
              <div className='col'>{receipt.day+'-'+receipt.month+'-'+receipt.year}</div>
            </div>
            </li>

        </ul>
        </section>
      )
    })):(
      <section class="card">
          <div class="card-header user-header alt bg-dark">
              <div class="media">
                      <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={kR}/>
                  <div class="media-body">
                      <h2 class="text-light display-6">{decode.name}</h2>
                  </div>
              </div>
          </div>
      <div className='alert alert-info text-center'>No Payment Made Yet</div>
      </section>
    )

    return(
            <div class="main-content">
      <div class='container-fluid'>
      <div class="col-md-8 mx-auto">
                              <aside class="profile-nav alt">

                                      {RECEIPT}
                              </aside>
                          </div>
      </div>
      </div>
    )
  }
}
Receipt.propTypes = {
  getReceipt:PropTypes.func.isRequired,
  receipt: PropTypes.object.isRequired
}
const mapStateToProps= state => {
return{
    receipt:state.receipt
  }
}
export default connect(mapStateToProps, {getReceipt})(Receipt)
