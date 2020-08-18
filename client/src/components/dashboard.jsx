import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
import Student from './student'
import kR from '../unnamed.jpg'
class Dashboard extends Component{


  render(){
const decode = jwt_decode(localStorage.token)
    return(
            <div class="main-content">
            <div class="container emp-profile">
          <form method="post">
              <div class="row">
                  <div class="col-md-4">
                      <div class="profile-img">
                          <img src={kR} alt=""/>

                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="profile-head">
                                  <h5>
                                      {decode.surname+' '+decode.name}
                                  </h5>

                                  <p class="proile-rating">Age : <span>{decode.age}</span></p>

                      </div>
                  </div>

              </div>
              <div class="row">
                  <div class="col-md-4">
                      <div class="profile-work">
                          <p>Others</p>
                          <Link to="/receipts">Receipts</Link><br/>
                          <Link to="/results">Results</Link><br/>
                          <Link to="/ptf">Parent's and Teacher's Forum</Link><br/>
                          <Link to="/chat">Chats with {decode.gender==='Female' ? 'her ' : 'his '}teacher</Link><br/>
                          <Link to="/shop">Shopping Page</Link><br/>
                      </div>
                  </div>
                  <div class="col-md-8">
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Identification Number</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.student_id}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Religion</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.religion}</p>
                                          </div>
                                      </div>
                                      {
                                        (decode.department==='Science' || decode.department==='Art' || decode.department==='Commercial')?(
                                          <div class="row">
                                              <div class="col-md-6">
                                                  <label>Department</label>
                                              </div>
                                              <div class="col-md-6">
                                                  <p>{decode.department}</p>
                                              </div>
                                          </div>
                                        ):(
                                          <div></div>
                                        )
                                      }
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>State Of Origin</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.sog}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Local Government Area</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.lga}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Residential Address</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.address}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Guardian's Name</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.pname}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Guardian's Surname</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.psurname}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Email</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.email}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Mobile Number</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.number}</p>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Guardian's Address</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{decode.paddress}</p>
                                          </div>
                                      </div>
                          </div>
              </div>
          </form>
      </div>

            </div>
    )
  }
}


export default connect()(Dashboard)
