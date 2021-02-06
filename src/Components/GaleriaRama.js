import React, {Component} from 'react'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import '../App.css'
import { contains } from 'jquery';

class GaleriaRama extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.swiper1 = new Swiper('.swiper1', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }


  render(){
    return (
      <div className="swiper-container swiper1">
      <div className="swiper-wrapper">
        <div className="swiper-slide" style={{ backgroundImage: `url('/images/banner1.png') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "300px", width: "100%"}} ></div>
        <div className="swiper-slide" style={{ backgroundImage: `url('/images/banner2.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "300px", width: "100%"}} ></div>
        <div className="swiper-slide" style={{ backgroundImage: `url('/images/banner3.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "300px", width: "100%"}}></div>
        <div className="swiper-slide" style={{ backgroundImage: `url('/images/banner4.jpg') `, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: "300px", width: "100%"}}></div>
        <div className="swiper-slide"></div>
      </div>
      <div className="swiper-pagination swiper-pagination1"></div>
    </div>
    )
  }
}
export default GaleriaRama;