import React from 'react';
import './Services.css';


const Services = () => {
    return (
       <div className="servicesjs">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
       <section className="services" id="services">

               <h1 className="heading"> my <span>services</span> </h1>

               <div className="box-container">

                   <div className="box">
                       <i className="fas fa-code"></i>
                       <h3>web design</h3>
                       <p>my name is Salhi Fayza & i am a font-end developer</p>
                   </div>

                   <div className="box">
                       <i className="fas fa-paint-brush"></i>
                       <h3>graphic design</h3>
                       <p>my name is Salhi Fayza & i am a font-end developer</p>
                   </div>

                   <div className="box">
                       <i className="fas fa-mobile"></i>
                       <h3>responsive design</h3>
                       <p>my name is Salhi Fayza & i am a font-end developer</p>
                   </div>

                   <div className="box">
                       <i className="fas fa-bullhorn"></i>
                       <h3>digital marketing</h3>
                       <p>my name is Salhi Fayza & i am a font-end developer</p>
                   </div>

                   <div className="box">
                       <i className="fas fa-search-dollar"></i>
                       <h3>SEO marketing</h3>
                       <p>my name is Salhi Fayza & i am a font-end developer</p>
                   </div>

                   <div className="box">
                       <i className="fab fa-wordpress"></i>
                       <h3>wordpress</h3>
                       <p>my name is Salhi Fayza & i am a font-end developer</p>
                   </div>

               </div>

           </section>
         </div>
    )
}
export default Services;
