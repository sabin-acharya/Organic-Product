import React from 'react';

const PopularProductTitle = (props) => {
  console.log(props);
  return (
    <li className='list-inline-item'> 
      <a className="cursor">{props.title}</a>
    </li>
  );
};

const ProductTitles = [
  {
    title: 'Electronic',
  },
  {
    title: 'Beauty',
  },
  {
    title: 'Jewellery',
  },
  {
    title: 'Fashion',
  },
];

const PopularProduct = () => {
  return (
    <div className='container-fluid'>
        <div className='flex-row d-flex justify-content-between' style={{marginTop:'24px'}}>

            <div>
                Popular Products
            </div>
            <ul className='list list-inline- ml-auto'>
                {ProductTitles.map((productTitle, index) => (
                <PopularProductTitle key={index} title={productTitle.title} />
                ))}
            </ul>
        </div>
    </div>
  );
};

export default PopularProduct;