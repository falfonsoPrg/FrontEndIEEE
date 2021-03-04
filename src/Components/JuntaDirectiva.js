import React, {Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import '../App.css'
import { yellow } from '@material-ui/core/colors';

class JuntaDirectiva extends Component
{

    componentDidMount()
    { 
        this.swiper2 = new Swiper('.swiper2', {
            slidesPerView: 2,
            spaceBetween: 10,
            // init: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },

            }
          });
          
    }

    render()
    {
        return (
            <div className="swiper-container swiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team1.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
              <div className="box-content">
                <h1 className="title" style={{color: 'white', bottom: "40px"}}>Williamson</h1>
                <span className="post" style={{color: 'white'}}>role in detail</span>
              </div>
                </div>
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team2.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
                Slide 2
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team3.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
                Slide 3
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team4.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
                Slide 4
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team1.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
                Slide 5
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team2.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
                Slide 6
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team3.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
                Slide 7
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url('/images/team4.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "400px", width: "100%"}}>
                Slide 8
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination2"></div>
            <div class="swiper-button-next" ></div>
            <div class="swiper-button-prev" ></div>
          </div>
        )
    }
}

export default JuntaDirectiva;