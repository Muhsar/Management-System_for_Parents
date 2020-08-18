import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import SignUp from './components/signUp'
import Login from './components/login'
import Footer from './components/footer'
import Topbar from './components/topbar'
import PTF from './components/ptf'
import News from './components/news'
import ChatPage from './components/chatpage'
import Student from './components/student'
import Results from './components/results'
import FirstTerm from './components/firstterm'
import SecondTerm from './components/secondterm'
import ThirdTerm from './components/thirdterm'
import ClassBill from './components/classBill'
import Receipt from './components/receipt'
import Product from './components/product'
import ProductDetail from './components/productDetail'
import './index.css'
import Cart from './components/cart'
class App extends Component {
  UNSAFE_componentWillMount() {
    axios.interceptors.request.use(function (config) {
          const token = localStorage.token;
          config.headers.Authorization =  token;

          return config;
        });
        axios.defaults.headers.common['Authorization'] = localStorage.token
  }

  render() {
    const loginRoutes = (

      <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signUp' component={SignUp}/>
      </Switch>
    )
    const userRoutes = (
      <React.Fragment>
      <Navbar />
      <div class='page-container'>
      <Topbar/>
      <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/chat' component={ChatPage}/>
      <Route exact path='/student/:student_id' component={Student}/>
      <Route path='/ptf' component={PTF}/>
      <Route path='/news' component={News}/>
      <Route exact path='/results' component={Results}/>
      <Route exact path='/1stterm/:student_id' component={FirstTerm}/>
      <Route exact path='/2ndterm/:student_id' component={SecondTerm}/>
      <Route exact path='/3rdterm/:student_id' component={ThirdTerm}/>
      <Route path='/bill' component={ClassBill}/>
      <Route path='/receipt' component={Receipt}/>
      <Route exact path='/product' component={Product}/>
      <Route exact path='/cart' component={Cart}/>
      <Route path='/product/:product_id' component={ProductDetail}/>
      <Route path='/cart/:cart_id' component={ProductDetail}/>
      </Switch>
      <Footer/>
      </div>
      </React.Fragment>
    )
    return (
      <Router>
      <div >

      <Switch>
      {localStorage.token ? userRoutes : loginRoutes}
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
