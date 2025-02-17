import React from 'react';
import Slider from 'react-slick';
import './slider.css';
import image1 from '../../assets/images/slide1.jpeg';
import Account from '../../assets/images/account.png';
import image2 from '../../assets/images/slide2.jpeg';



const Homeslider =() => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
      <section className='homeSlider'>
        <div className='container-fluid'>
                <Slider style={{height:'484px'}} {...settings}>
                    <div>
                            <img src={image1}></img>
                    </div>
                    <div>
                    <img src={Account}></img>
                    </div>
                    <div>
                    <h4>3</h4>
                    </div>
                    <div>
                    <h4>4</h4>
                    </div>
                    <div>
                        <h4>5</h4>
                    </div>
                   
                </Slider>
        </div>
      </section>
    </div>
  )
}

export default Homeslider
