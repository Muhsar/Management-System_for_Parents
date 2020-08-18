import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {studentAccount} from '../actions/candidateAction'
class signUp extends Component {
  state={
    surname:'',
    student_id:'',
    password:'',
    reg:false,
    msg:'',
    error:'',
    status:''
  }

  handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     handleId=e=>{
       this.props.studentAccount(e.target.value)
       this.setState({student_id:e.target.value})
     }
     checkId=e=>{
       e.preventDefault()
       const {student} = this.props.student
       if(student!==null){
       student.student_id!==this.state.student_id ? this.setState({reg:false, error:'No Student With that ID or the account has been registered'}) : this.setState({reg:true})}
       else if((this.state.student_id).length!==13){
         this.setState({reg:false,error:'The Id must be 13 characters long'})
       }
       else if(this.state.student_id===''){
         this.setState({reg:false,error:"Input the Child's ID to continue registration"})
       }
       console.log((this.state.student_id).length)
     }
     handleSubmit=(e)=>{
         e.preventDefault()
         const {student} = this.props.student
         if(student.surname===this.state.surname){
         const user={
            password:this.state.password
         }
         axios.post(('/signup/'+student.student_id),user)
          .then(res=>{this.setState({status:res.data})})
          this.props.history.push('/')
          console.log(student.student_id)
        }else{
          this.setState({msg:"Surnames do not match"})
        }
     }
  render(){
    return(
      <div class="row mt-5">
  <div class="col-md-6 m-auto">
    <div class="card card-body">
      <h1 class="text-center mb-3"><i class="fas fa-user-plus"></i> Register</h1>
    </div>
    <form noValidate onSubmit={this.handleSubmit}>
    <div class="row form-group">
    {
      this.state.status===''?<div></div>:<div className='alert alert-info'>{this.state.status}</div>
    }
        <div class="col col-md-3">
            <label for="selectSm" class=" form-control-label">Child's Id</label>
        </div>
        <div class=" col col-md-7">
            <input value={this.state.student_id} name="student_id" onChange={this.handleId} type='text' className='form-control'/>
        </div>
        <div class='col col-md-2'><button type="button" className='btn btn-outline-primary btn-block' onClick={this.checkId}>Next</button></div>
    </div>
    {
      (this.state.reg===true)?(
        <div>
        {
          (this.state.msg==='')?(<div></div>):(
            <div className='alert alert-danger'>{this.state.msg}</div>
          )
        }
        <div class="form-group">
        <label for="surname">Child's Surname</label>
        <input class="form-control"
        id="surname"
        type="surname"
        name="surname"
        placeholder="Enter Child's Surname"
        onChange={this.handleChange}/>
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
        id="password"
        type="password"
        name="password"
        placeholder="Create Password"
        onChange={this.handleChange}/>
        </div>
        <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
        </div>
      ):(
        (this.state.student_id==='')?(
          <div className='alert alert-info'>Input The Child's ID to continue with the registration</div>
        ):(this.state.error!==''?
        <div className='alert alert-info'>{this.state.error}</div>:<div></div>)
      )
    }
    </form>
    <p class="lead mt-4">Have An Account? <Link to="/">Login</Link></p>
  </div>
</div>
    )
  }
}
const mapStateToProps= state => {
  return{
    student:state.student
  }
}
export default connect(mapStateToProps,{studentAccount})(signUp)
