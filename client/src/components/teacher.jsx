import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {teacherInfo} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
import  {Link} from 'react-router-dom'
class Teacher extends Component {

  componentDidMount() {
    const decode = jwt_decode(localStorage.token)
    this.props.teacherInfo(decode.clas)
  }

  render(){
    const {teacher} = this.props.teacher
    return(
                                  <div>
                                      <div class="modal-header user-header alt bg-dark">
                                          <div class="media">
                                                  <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={kR}/>
                                              <div class="media-body">
                                                  <h2 class="text-light display-6">{teacher.surname+' '+teacher.name}</h2>
                                                  <p class="text-light">{teacher.clas}</p>
                                              </div>
                                          </div>
                                      </div>


                                      <ul class="list-group list-group-flush modal-body">


                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{teacher.gender}</div>
                                            </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{teacher.address}</div>
                                          </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{teacher.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{teacher.number}</div>
                                          </div>
                                          </li>

                                      </ul>
                                  </div>
    )
  }
}
Teacher.propTypes = {
  teacherInfo:PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
    teacher:state.teacher
  }
}
export default connect(mapStateToProps, {teacherInfo})(Teacher)
