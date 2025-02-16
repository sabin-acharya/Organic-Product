import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/mainLogo.png';
import Location from '../../assets/images/location.png';
import Dropdown from '../../assets/images/dropdown.png';
import Cart from '../../assets/images/cart.png';
import Wishlist from '../../assets/images/wishlist.png';
import Account from '../../assets/images/account.png';

const Header = () => {
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={Logo}></img>
                </div>
                {/* header search code */}
                <div className='col-sm-5'>
                    <div className='headerSearch d-flex align-items-center'>
                        <div className='selectDrop cursor'>
                            All Category

                        </div>
                        <div className='search'>
                          <input type='text'/>
                          
                        </div>
                    </div>
                </div>
             {/* location dropdown */}
             <div>
                <img src={Location}/>
                <div>
                    Your Location
                    <img src={Dropdown}/>
                </div>
             </div>
             {/* right side list */}
             <div>
                {/* wishlist */}
                <div>
                <img src={Wishlist}/>
                <div>
                    Wishlist
                </div>

                </div>
                {/* cart */}
                <div>
                    <img src={Cart}/>
                    <div>
                        Cart
                    </div>
                </div>
                {/* account */}
                <div>
                <img src={Cart}/>
                <div>
                    Account
                </div>
                </div>
             </div>

            </div>
        </div>
        </>
    );
};

export default Header;