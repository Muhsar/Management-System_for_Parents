import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import kR from '../unnamed.jpg'
import {firstTerm,studentDetail} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
class FirstTerm extends Component {
  componentDidMount() {
    const decode=jwt_decode(localStorage.token)
    this.props.studentDetail(decode.student_id)
    this.props.firstTerm(decode.student_id)

  }
  render() {
    const {student} = this.props.student
    const {first} = this.props.first
    function sum(input){
      if(toString.call(input)!=="[object Array]")
      return false
      var total = 0
      for (var i = 0; i<input.length;i++){
        if(isNaN(input[i])){
          continue
        }
        total += Number(input[i])
      }
      return total
    }
    const totalresult = sum(first.map(first=>first.total))
    const examtotal = sum(first.map(first=>first.exam))
    const testtotal = sum(first.map(first=>first.test))
    const percentage = totalresult/first.length
    const RESULT = (first.length)?(
      first.map(first=>{
        return(
          <tr key={first._id}>
          <td colspan='2' onClick={this.toggleDelete}>{first.subject}</td>
          <td colspan='1'>{first.test}</td>
          <td colspan='1'>{first.exam}</td>
          <td class="text-right" colspan='1'>{first.total}</td>
          <td class="text-right" colspan='1'>{first.grade}</td>
          <td class="text-right" colspan='2'>{first.remarks}</td>

          </tr>
        )
      })
    ):(
      <tr class="odd"><td valign="top" colspan="13" class="dataTables_empty text-center">No data available in table</td></tr>
    )
    return (
      <aside class="profile-nav alt">
      <section class="card">
      <div class="card-header user-header alt bg-dark">
      <div class="media">
      <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={kR}/>
      <div class="media-body">
      <h2 class="text-light display-6">{student.surname+' '+student.name}</h2>
      <p class="text-light">{student.clas}</p>
      </div>
      </div>
      </div>
      <div class=" table-responsive">
      <table class="table table-borderless table-striped table-earning" style={{width:'100%'}}>
      <thead>
      <tr>

      <th colspan='2'>Subjects</th>
      <th colspan='1'>40</th>
      <th colspan='1'>60</th>
      <th colspan='1' class="text-right">100</th>
      <th colspan='1' class="text-right">Grade</th>
      <th colspan='2' class="text-right">Remarks</th>

      </tr>
      </thead>
      <tbody>
      {RESULT}

      <tr>
      <td colspan='13'><hr/>
      <hr/></td>
      </tr>
      <tr>
      <td colspan='2'>Total</td>
      <td colspan='1'>{testtotal}</td>
      <td colspan='1'>{examtotal}</td>
      <td class="text-right" colspan='1'>{totalresult}</td>
      <td class="text-right" colspan='3'>Percentage: {percentage}%</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br/>
      </section>
      </aside>
    );
  }
}
FirstTerm.propTypes = {
  first: PropTypes.object.isRequired,
  firstTerm:PropTypes.func.isRequired,
  studentDetail:PropTypes.func.isRequired,
  total:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    first:state.first,
    student:state.student,
    total:state.total
  }
}
export default connect(mapStateToProps, {firstTerm,studentDetail})(FirstTerm);
