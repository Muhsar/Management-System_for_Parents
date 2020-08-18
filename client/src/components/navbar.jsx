import React, { Component } from 'react';
import kR from '../unnamed.jpg'
import {Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
class Navbar extends Component {
  logOut=(e)=>{
  e.preventDefault()
  localStorage.removeItem('token')
  window.location='/'
  }

    render() {
      const decode = jwt_decode(localStorage.token)
        return (
            <div>
            <header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <Link class="logo" to="index.html">
                            <img src="images/icon/logo.png" alt="CoolAdmin"/>
                        </Link>
                        <button class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="account2">
                    <div class="image img-cir img-120">
                        <img src={kR} alt="John Doe"/>
                    </div>
                    <h4 class="name">{decode.name}</h4>
                    <Link onClick={this.logOut}><i className='fa fa-sign-out-alt'/> Log Out</Link>
                </div>
            <nav class="navbar-mobile" style={{display: 'none'}}>
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">
                    <li class="has-sub">
                        <Link to="/">
                            <i class="fas fa-tachometer-alt"></i>Dashboard
                        </Link>
                    </li>

                    <li class="has-sub">
                        <Link class="js-arrow" >
                            <i class="fas fa-shopping-cart"></i>Shop
                            <span class="arrow">
                                <i class="fas fa-angle-down"></i>
                            </span>
                        </Link>
                        <ul class="list-unstyled navbar__sub-list js-sub-list">
                            <li>
                                <Link to="/product">
                                    <i class="fas fa-indent"/>Products</Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <i class="fas fa-shopping-cart"/>Cart</Link>
                            </li>

                        </ul>
                    </li>

                    <li class="has-sub">
                        <Link to="/news">
                            <i class="fas fa-list-alt"></i>News
                        </Link>
                    </li>
                    <li class="has-sub">
                        <Link to="/results">
                            <i class="fas fa-dedent"></i>Results
                        </Link>
                    </li>
                    <li class="has-sub">
                        <Link to="/ptf">
                            <i class="fas fa-group"></i>PTF
                        </Link>
                    </li>
                    <li class="has-sub">
                        <Link to="/chat">
                            <i class="fas fa-comment"></i>{'Message '+(decode.gender==='Male'?'his':'her')+' Teacher'}
                        </Link>
                    </li>
                    <li><Link onClick={this.logOut}><i className='fa fa-sign-out-alt'/> Log Out</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                <Link to="#">
                    <img src="images/icon/logo.png" alt="Cool Admin"/>
                </Link>
            </div>
            <div class="menu-sidebar__content js-scrollbar1 ps">
            <div class="account2">
                    <div class="image img-cir img-120">
                        <img src={kR} alt="John Doe"/>
                    </div>
                    <h4 class="name">{decode.name}</h4>
                    <Link onClick={this.logOut}><i className='fa fa-sign-out-alt'/> Log Out</Link>
                </div>
            <nav class="navbar-sidebar2">
                <ul class="list-unstyled navbar__list">
                <li class="has-sub">
                    <Link to="/">
                        <i class="fas fa-tachometer-alt"></i>Dashboard
                    </Link>
                </li>

                <li class="has-sub">
                    <Link class="js-arrow" >
                        <i class="fas fa-shopping-cart"></i>Shop
                        <span class="arrow">
                            <i class="fas fa-angle-down"></i>
                        </span>
                    </Link>
                    <ul class="list-unstyled navbar__sub-list js-sub-list">
                        <li>
                            <Link to="/product">
                                <i class="fas fa-indent"/>Products</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <i class="fas fa-shopping-cart"/>Cart</Link>
                        </li>

                    </ul>
                </li>

                <li class="has-sub">
                    <Link to="/news">
                        <i class="fas fa-list-alt"></i>News
                    </Link>
                </li>
                <li class="has-sub">
                <Link to="/results">
                    <i class="fas fa-dedent"></i>Results
                </Link>
                </li>
                <li class="has-sub">
                    <Link to="/ptf">
                        <i class="fas fa-group"></i>PTF
                    </Link>
                </li>
                <li class="has-sub">
                    <Link to="/chat">
                        <i class="fas fa-comment"></i>{'Message '+(decode.gender==='Male'?'his':'her')+' Teacher'}
                    </Link>
                </li>
                </ul>
            </nav>
            <div class="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div class="ps__thumb-x" tabindex="0" style={{left: '0px', width: '0px'}}></div></div><div class="ps__rail-y" style={{top: '0px', right: '0px'}}><div class="ps__thumb-y" tabindex="0" style={{top: '0px', height: '0px'}}></div></div></div>
        </aside>
            </div>
          );
    }
}

export default Navbar;
