import React from 'react';
import './Portfolio.css';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';
import img6 from './images/img-6.jpg';
const Portfolio = () => {
    return (
       <div className="servicesjs">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
       <section class="portfolio" id="portfolio">

               <h1 class="heading"> my <span>portfolio</span> </h1>

               <div class="box-container">

                   <div class="box">
                       <img src={img1}/>
                       <div class="content">
                           <h3>project 01</h3>
                           <h3>GitHub</h3>
                       </div>
                   </div>

                   <div class="box">
                       <img src={img2}/>
                       <div class="content">
                           <h3>project 02</h3>
                            <h3>GitHub</h3>
                       </div>
                   </div>

                   <div class="box">
                       <img src={img3}/>
                       <div class="content">
                           <h3>project 03</h3>
                            <h3>GitHub</h3>
                       </div>
                   </div>

                   <div class="box">
                       <img src={img4}/>
                       <div class="content">
                           <h3>project 04</h3>
                            <h3>GitHub</h3>
                       </div>
                   </div>

                   <div class="box">
                       <img src={img5}/>
                       <div class="content">
                           <h3>project 05</h3>
                            <h3>GitHub</h3>
                       </div>
                   </div>

                   <div class="box">
                       <img src={img6}/>
                       <div class="content">
                           <h3>project 06</h3>
                            <h3>GitHub</h3>
                       </div>
                   </div>

               </div>

           </section>

         </div>
    )
}
export default Portfolio;
