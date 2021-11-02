import React from 'react';
import './Products.css';
import w1 from './images/1.jpg';
import w2 from './images/2.jpg';
import w3 from './images/3.jpg';
import w4 from './images/j1.jpg';
import w5 from './images/j2.jpg';
import w6 from './images/j3.jpg';
import w7 from './images/t1.jpg';
import w8 from './images/t2.jpg';
import w9 from './images/t3.jpg';
const Products = () => {
    return (
       <div className="productsjs">

       <section className="row work">


               <h1 className="heading">My <span>Products</span></h1>


           <div className=" main-col">



               <ul className="works-container triggerAnimation animated" data-animate="bounceIn">

                   <li className="work-post identity">
                       <img alt="" src={w1}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Coffee</h2>
                               <span>Coffee</span>
                           </div>
</a>
                   </li>

                   <li className="work-post web-design web-development">
                       <img alt="" src={w2}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Coffee</h2>
                               <span>Coffee</span>
                           </div>
</a>
                   </li>

                   <li className="work-post graphic-design">
                       <img alt="" src={w3}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Coffee</h2>
                               <span>Coffee</span>
                           </div>
</a>
                   </li>

                   <li className="work-post web-design">
                       <img alt="" src={w4}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Juice</h2>
                               <span>Juice</span>
                           </div>
</a>
                   </li>

                   <li className="work-post identity">
                       <img alt="" src={w5}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Juice</h2>
                               <span>Juice</span>
                           </div>
</a>
                   </li>

                   <li className="work-post graphic-design">
                       <img alt="" src={w6}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Juice</h2>
                               <span>Juice</span>
                           </div>
</a>
                   </li>

                   <li className="work-post web-development">
                       <img alt="" src={w7}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Tea</h2>
                               <span>Tea</span>
                           </div>
</a>
                   </li>

                   <li className="work-post identity web-design">
                       <img alt="" src={w8}/>
<a className="hover-box">
                           <div className="inner-hover">
                               <h2>Tea</h2>
                               <span>Tea</span>

                           </div>
</a>
                   </li>
                   <li className="work-post identity web-design">
                       <img alt="" src={w9}/>
  <a className="hover-box">
                           <div className="inner-hover">
                               <h2>Tea</h2>
                               <span>Tea</span>

                           </div>
  </a>
                   </li>
               </ul>


       </div>



   </section>

         </div>
    )
}
export default Products;
