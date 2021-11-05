import React from 'react'
import {  Route, Switch } from 'react-router'
import { MainPages, Footer } from './style'
import behance from '..//assest/icon/behance.png'
import NavHeader from '../navHeader'
import HomePage from '../homePage'
import Shops from '../shops'
import About from '../about'
import Pages from '../page'
import Contact from '../contact'



function MainPage() {
    return (
        <>
      <MainPages>
<NavHeader/>
        <Switch>
        <Route path='/' exact>
                    <HomePage path='/' />
                </Route>
                <Route path='/shop' exact component={Shops} />
                <Route path='/about' component={About} />
             <   Route path='/pages'   component={Pages}/>
               <Route path='/contact' component={Contact}/>
        </Switch>  
           <Footer>
                    <div className='cards-wrapper'>
                        <div className='card'>
                            <p className="title">Time <span style={{ color: "red" }}>Zone</span> </p> <br /><br />
                            <p className="about1">Asorem ipsum adipolor sdit amet, consectetur
                                adipisicing elitcf sed do eiusmod
                                tem.
                            </p></div>
                        <div className='card1'>
                            <p className="title">Quick Links</p> <br />
                            <p className="about1">
                                <li>About</li>
                                <li>Offers & Discount</li>
                                <li>get coupon</li>
                                <li>contact us</li>
                            </p></div>
                        <div className='card1'>
                            <p className="title">New Products</p> <br />
                            <p className="about1">
                                <li>woman clothes</li>
                                <li>fashion accessories</li>
                                <li>man accessories</li>
                                <li>rubber mad toys</li>
                            </p></div>
                        <div className='card1'>
                            <p className="title">Support</p> <br />
                            <p className="about1">
                                <li>frequently asked questions</li>
                                <li>terms & conditions</li>
                                <li>privacy policy</li>
                                <li>report a payment issue</li>
                            </p></div>

                    </div>
                    <p className="titles">Copyright ©2021 All rights reserved | This template is made with 🧡  by <span style={{ color: "red" }}>Abdullo Nasrullaev</span> </p>

                    <div className='icon'>
                        <img src="https://img.icons8.com/material-sharp/24/000000/twitter-squared.png" />
                        <img src="https://img.icons8.com/material-sharp/24/000000/facebook-f.png" />
                        <img src={behance} alt="" />
                        <img src="https://img.icons8.com/material-sharp/24/000000/globe--v2.png" />
                    </div>       
           </Footer>
      </MainPages>
      
      </>
    )
}

export default MainPage
