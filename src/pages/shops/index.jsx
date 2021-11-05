import React from 'react'
import { Shopping } from './style'
import clock1 from '..//assest/img/gallery/popular1.png'
import clock2 from '..//assest/img/gallery/popular2.png'
import clock3 from '..//assest/img/gallery/popular3.png'
import clock4 from '..//assest/img/gallery/popular4.png'
import clock5 from '..//assest/img/gallery/popular5.png'
import clock6 from '..//assest/img/gallery/popular6.png'
import imag from '..//assest/img/hero/about_hero.png'



function Shops() {
    return (
        <Shopping>
         <div className='logo'>
<img src={imag} alt="" />
<center style={{position:'absolute', top:"260px", left:"450px", fontSize:"40px"}}><h1>Watch Shop</h1></center>
         </div>
<div className='navbar'>
    <div className='titleee'>
<a href='#' className="title1">Newest arrivals</a>
<a href='#'  className="title1">Price high to low</a>
<a href='#' className="title1">Most popular</a>
</div>
<select name="option" autoFocus id="">
    <option value="40 per page">40 per page</option>
    <option value="40 per page">50 per page</option>
    <option value="40 per page">60 per page</option>
    <option value="40 per page">70 per page</option>
</select>
</div>

         <div id='shop' className="card-wrapper">
                    <div> 
                        <img src={clock1} alt="" /> 
                        <p className="pric">Thermo Ball Etip Gloves  <br /><span>$ 45,743</span> </p>
                        </div>
                    <div> 
                        <img src={clock2} alt="" /> 
                        <p className="pric">Thermo Ball Etip Gloves  <br /><span>$ 45,743</span> </p>
                        </div>
                    <div> 
                        <img src={clock3} alt="" /> 
                        <p className="pric">Thermo Ball Etip Gloves  <br /><span>$ 45,743</span> </p>
                        </div>
                    <div> 
                        <img src={clock4} alt="" /> 
                        <p className="pric">Thermo Ball Etip Gloves  <br /><span>$ 45,743</span> </p>
                        </div>
                    <div> 
                        <img src={clock5} alt="" /> 
                        <p className="pric">Thermo Ball Etip Gloves  <br /><span>$ 45,743</span> </p>
                        </div>
                    <div> 
                        <img src={clock6} alt="" /> 
                        <p className="pric">Thermo Ball Etip Gloves  <br /><span>$ 45,743</span> </p>
                        </div>
                  
                </div>
                <div className="card-wraper">
 <div className="card2">
 <img src="https://cdn-icons-png.flaticon.com/128/3198/3198964.png" data-src="https://cdn-icons-png.flaticon.com/128/3198/3198964.png" alt="Invert free icon" backgroung-color="white" title="Invert free icon" width="40" height="41" class="lzy lazyload--done" srcset="https://cdn-icons-png.flaticon.com/128/3198/3198964.png 4x"/>
 <p className="title">Free Shipping Method</p> 
 <p className="about">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>

 </div>
    <div className="card2">
    <img src="https://cdn-icons.flaticon.com/png/128/2889/premium/2889676.png?token=exp=1636041163~hmac=bdbf833259b1a5c4c0cce3a97699a175" data-src="https://cdn-icons.flaticon.com/png/128/2889/premium/2889676.png?token=exp=1636041163~hmac=bdbf833259b1a5c4c0cce3a97699a175" alt="Padlock free icon" title="Padlock free icon" width="40" height="41" class="lzy lazyload--done" srcset="https://cdn-icons.flaticon.com/png/128/2889/premium/2889676.png?token=exp=1636041163~hmac=bdbf833259b1a5c4c0cce3a97699a175 4x"/>
    <p className="title">Secure Payment System  </p> 
    <p className="about">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
    </div>
    <div className="card2">
    <img src="https://cdn-icons-png.flaticon.com/128/126/126502.png" data-src="https://cdn-icons-png.flaticon.com/128/126/126502.png" alt="Reload free icon" title="Reload free icon" width="41" height="41" class="lzy lazyload--done" srcset="https://cdn-icons-png.flaticon.com/128/126/126502.png 4x"/> 
    <p className="title">Secure Payment System</p>
    <p className="about">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
    </div>
</div>
        </Shopping>
    )
}

export default Shops
