import React from 'react';
import categoryImage from '../../assets/images/slide5.jpeg';
import categoryImage1 from '../../assets/images/slide4.jpeg';
import categoryImage2 from '../../assets/images/slide3.jpeg';
import categoryImage3 from '../../assets/images/slide2.jpeg';
import categoryImage4 from '../../assets/images/slide1.jpeg';
import './feature.css';


const CategoryList = ({img,text}) => {
    return ( 
        <div className='category-list-item'>
            <img className='category-list-img' src={img} alt=''/>
            <p style={{ textAlign: 'center' }}><span>{text}</span></p>
        </div>)
};

const Feature = () => {
    return (
        <>
        <div style={{Margin: '20px'}}>
            <h3>Featured Category</h3>
        </div>
        <div className='category-list'>

            <CategoryList img={categoryImage1} text={'Nature'} /> 
            <CategoryList img={categoryImage2} text={'Electronic'} />
            <CategoryList img={categoryImage3} text={'Toys'} />
            <CategoryList img={categoryImage4} text={'Fruits'} />
        </div>
        </>
    );
};

export default Feature;