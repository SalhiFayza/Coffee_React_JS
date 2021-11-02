import React from 'react';
import './Home.css';


const Home = () => {
    return (
       <div className="homejs">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
              
                  <section className="home" id="home">

                        <div className="content">
                          <h3>Salhi Fayza</h3>
                          <p>i am a developer</p>
                        </div>

                        <div class="share">
                             <a  className="fab fa-facebook-f"></a>
                             <a href="#" className="fab fa-twitter"></a>
                             <a href="#" className="fab fa-instagram"></a>
                             <a href="#" className="fab fa-linkedin"></a>
                             <a href="#" className="fab fa-pinterest"></a>
                      </div>

               </section>

         </div>
    )
}
export default Home;
