import React from 'react';
import './product.css';
import img1 from '../../assets/images/tech1.jpeg';
import img2 from '../../assets/images/tech2.jpeg';
import img3 from '../../assets/images/tech3.jpeg';
import img4 from '../../assets/images/tech4.jpeg';

const Item = ({ props }) => {
    console.log(props);
    return (
        <div >
            <img src="https://via.placeholder.com/150" alt='' />
            <p><span>{props.title}</span></p>
            <p><span>{props.ratting}</span></p>
            <p><span>{props.price}</span></p>
        </div>
    );
};
const itemProps = [
    {
        Img: {img1},
        title: 'Product Title',
        price: '1000',
        oldprice: '200',
        ratting: '4.5'
    },
    {
        Img: {img2},
        title: 'Product Title1',
        price: '3000',
        oldprice: '900',
        ratting: '4.5'
    }
    ,
    {
        Img: {img3},
        title: 'Product Title2',
        price: '2000',
        oldprice: '700',
        ratting: '4.5'
    },
    {
        Img: {img4},
        title: 'Product Title3',
        price: '2000',
        oldprice: '700',
        ratting: '4.5'
    }
    
]


const Product = () => {
    return (
        <div>
            {
                itemProps.map((itemProp) => <Item props={itemProp} />)
            }
        </div>
    );
};

export default Product;
