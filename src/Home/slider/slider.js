import React from 'react';
import Slider from 'react-slick';
import './slider.css';
import image1 from '../../assets/images/slide1.jpeg';
import Account from '../../assets/images/account.png';
import image2 from '../../assets/images/slide2.jpeg';
import image3 from '../../assets/images/slide3.jpeg';

const SliderImage = ({ imgProp }) => {
  console.log(imgProp);
  return (
    <div>
      <img src={imgProp} alt="Slider Image"  style={{height: '349px', width: '100%', borderRadius:'27px'}}/>
            
    </div>
  );
};

const imageList = [
  image1,
  image2,
  Account,
  image3,
];

const Homeslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className="homeSlider">
        <div className="container-fluid">
          <Slider style={{ height: '484px' }} {...settings}>
            {imageList.map((image, index) => (
              <SliderImage key={index} imgProp={image} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Homeslider;