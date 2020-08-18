import React, { Component } from 'react'
import kR from '../unnamed.jpg'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {getChatPage, addChatPage, teacherInfo} from '../actions/candidateAction'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Teacher from './teacher'
class ChatPage extends Component {
  state={
    message:''
  }
  handleChange=e=>{
    this.setState({message:e.target.value})
  }
handleSubmit=e=>{
  e.preventDefault()
  const decode = jwt_decode(localStorage.token)
  const {teacher} = this.props.teacher
  const chat ={
    teacher_id:teacher.teacher_id,
    message:this.state.message,
    name:decode.name,
    student_id:decode.student_id
  }
  this.props.addChatPage(chat)
  this.setState({message:''})
}

componentDidMount() {
  const decode = jwt_decode(localStorage.token)
    this.props.getChatPage(decode.student_id)
    this.props.teacherInfo(decode.clas)
}
  render(){
    const{teacher} = this.props.teacher
    const {chats} = this.props.chats
    var decode = jwt_decode(localStorage.token)
    const ChatPages = (this.props.chats.loading===false)?((chats.length) ? (
            chats.map(chat => {
              return(
                <React.Fragment>
                <div class="recei-mess-wrap">
                        <div class="recei-mess__inner" >
                        <div class="avatar avatar--tiny">
                                                            <img src={kR} alt={chat.name}/>
                                                        </div>
                            <div class="recei-mess-list">
                                <div class="recei-mess">{chat.message}</div>
                                <span class="mess-time float-left">
                                {decode.name===chat.name ? 'me' : chat.name}
                                </span>
                            </div>
                        </div>
                </div>


</React.Fragment>


              )
            })
          ):(<div></div>)
        ):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
      <div class='container-fluid'>
      <div class="col-md-8 mx-auto">
        <div class="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">

            <div class="au-card-title" style={{backgroundImage:'url('+kR+')'}}>
                <div class="bg-overlay bg-overlay--blue"></div>
                <h3>
                <Link type="button" class='text-white' data-toggle="modal" data-target="#myModal">
                    <img style={{width:'100px',height:'100px'}} src={kR} alt={teacher.name} class='rounded-circle img-fluid'/>
                    {' '+teacher.surname+' '+teacher.name}
                    </Link>
                    </h3>
                    <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <Teacher/>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


            </div>
            <div class="au-chat-textfield">
                <form class="au-form-icon" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.message} name='message' class="au-input au-input--full au-input--h65" type="text" placeholder="Type a message"/>
                    <button class="au-input-icon" type='submit'>
                        <i class="fa fa-location-arrow"></i>
                    </button>
                </form>
            </div>
            <div class="au-inbox-wrap">
                <div class="au-chat au-chat--border">
<div class="au-chat__content au-chat__content2 js-scrollbar5">
                    {ChatPages}
                    </div>

                </div>
            </div>
        </div>
                          </div>
      </div>
      </div>
    )
  }
}
ChatPage.propTypes = {
  chat: PropTypes.object.isRequired,
  getChatPage: PropTypes.func.isRequired,
  teacherInfo:PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
  chats: state.chats,
  teacher:state.teacher
}
}
export default connect(mapStateToProps,{getChatPage, addChatPage, teacherInfo})(ChatPage)
