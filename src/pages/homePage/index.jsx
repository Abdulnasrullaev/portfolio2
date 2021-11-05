import React from 'react'
import clock from '..//assest/img/hero/watch.png'
import { FirstPage, FourthPage, SecondPage, ThirdPage } from './style'
import product1 from '..//assest/img/gallery/new_product1.png'
import product2 from '..//assest/img/gallery/new_product2.png'
import product3 from '..//assest/img/gallery/new_product3.png'
import galery1 from '..//assest/img/gallery/gallery1.png'
import galery2 from '..//assest/img/gallery/gallery2.png'
import galery3 from '..//assest/img/gallery/gallery3.png'
import galery4 from '..//assest/img/gallery/gallery4.png'
import clock1 from '..//assest/img/gallery/popular1.png'
import clock2 from '..//assest/img/gallery/popular2.png'
import clock3 from '..//assest/img/gallery/popular3.png'
import clock4 from '..//assest/img/gallery/popular4.png'
import clock5 from '..//assest/img/gallery/popular5.png'
import clock6 from '..//assest/img/gallery/popular6.png'
import clocks1 from '../assest/img/gallery/choce_watch1.png'
import clocks2 from '../assest/img/gallery/choce_watch2.png'

function HomePage() {
    return (
        <>
         <FirstPage>
                <div style={{ width: "54%", padding: "100px" }}>
                    <h1 className="title">Select your new perfect style</h1><br />
                    <p className="about">Ut enim  ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                    <button>shop now</button>
                </div>
                <img src={clock} alt="" />


            </FirstPage>
            <SecondPage>
                <p className='title'>new arrival</p> <br />
                <div className='card'>
                    <div> <img src={product1} alt="" /><p>Thermo Ball Etip Gloves <br /> <span>$ 45,743</span></p></div>
                    <div><img src={product2} alt="" /><p>Thermo Ball Etip Gloves <br /> <span>$ 45,743</span></p></div>
                    <div><img src={product3} alt="" /><p>Thermo Ball Etip Gloves  <br /> <span>$ 45,743</span></p></div>
                </div>
                <div className='card2'>
                    <img src={galery1} className='img1' alt="" />
                    <img src={galery2} className='img2' alt="" />
                    <img src={galery3} className='img3' alt="" />
                    <img src={galery4} className='img3' alt="" />

                </div>
            </SecondPage>
            <ThirdPage>
                <center className="title">Popular Items</center><br />
                <center className='about'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</center>
                <div className="card-wrapper">
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
                <center><button>view more products</button></center>

            </ThirdPage>
            <FourthPage>
                <div className='watch1'>
                    <div>
                        <p className='title'>watch of choice</p>
                        <p className="about">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
</p>
<button className="show">show watches</button>
                    </div>
                    
                    <img src={clocks1} alt="" />
           </div>
                <div className='watch2'>
                    
                    <img src={clocks2} style={{ position:"relative", right:"200px"}} alt="" />
                    <div>
                        <p className='title'>watch of choice</p>
                        <p className="about">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
</p>
<button className="show">show watches</button>
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

            </FourthPage>
        </>
    )
}

export default HomePage
