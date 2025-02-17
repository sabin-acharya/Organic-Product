import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/mainLogo.png';
import Location from '../../assets/images/location.png';
// import Dropdown from '../../assets/images/dropdown.png';
import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import IconText from '../icon-text';
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const CustomDropdown = ({text='Location',icon: IconComponent,iconColor = 'black'}) => {
    return ( 
        <div className='flex-row d-flex justify-content-between align-items-center' style={{border: text!='Location'?'0px':'1px solid #000', padding:'8px',borderRadius: '5px',
        background: text=='Browse all category'?'#35ac75':'none',}}>
           {IconComponent && <IconComponent />} 
            
            <Dropdown>
                <Dropdown.Toggle variant="failure" id="dropdown-basic" style={{color: text==='Browse all category'?'white':'black',border:'none'} }>
                    {text}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>)
};

const CustomNavMenuDropdown = ({text}) => {
    return ( 
        <div className='flex-row d-flex justify-content-between align-items-center'>
           
            <Dropdown>
                <Dropdown.Toggle variant="failure" id="dropdown-basic">
                    {text}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>)
};

const CustomMenuNavLink = ({text, href}) => {
    return (
        <Nav.Link href={href} style={{display:'flex', alignItems:'center'}}>{text}</Nav.Link>
    )
}


const Header = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='flex-row d-flex justify-content-between'>
                    <div className='col-sm-2'>
                        <img src={Logo} style={{height:'60px'}}></img>
                    </div>

                    {/* header search code */}
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                            <div className='selectDrop cursor'>
                            <CustomDropdown text={'All category'} style={{border:'none!important'}}/>

                            </div>
                            <div className='search'>
                                <input placeholder='Search for items..' type='text' style={{border:'none'}}/>

                            </div>
                        </div>
                    </div>
                    <CustomDropdown icon={IoLocationOutline} text={'Location'}/>
                    {/* right side list */}
                    <div className='flex-row d-flex justify-content-between' style={{ gap: '8px' }}>
                        {/* wishlist */}
                        <IconText icon={MdFavoriteBorder} text='Wishlist' />
                        {/* cart */}
                        <IconText icon={TiShoppingCart} text='Cart' />
                        {/* account */}
                        <IconText icon={VscAccount}  />

                    </div>
                   

                </div>
                <div className='second-nav'>
                        <Navbar bg="light" data-bs-theme="light">
                            <Container>
                            <CustomDropdown icon={RxHamburgerMenu} iconColor="white" text={'Browse all category'}/>
                            <Nav className="me-auto" style={{ marginLeft: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <CustomMenuNavLink text='Deals' href='#deals'/>
                                <CustomNavMenuDropdown text={'Home'}/>
                                <CustomMenuNavLink text='About' href='#about'/>
                                <CustomNavMenuDropdown text={'Shop'}/>
                                <CustomNavMenuDropdown text={'Vendors'}/>
                                <CustomNavMenuDropdown text={'Mega menu'}/>
                                <CustomNavMenuDropdown text={'Blog'}/>
                                <CustomNavMenuDropdown text={'Pages'}/>
                                <CustomMenuNavLink text='Contract' href='#Contract'/>
                                <div style={{display:'flex', alignItems:'center', justifyContent: 'flex-end'}}>
                                        <div style={{display:'flex', alignItems:'center'}}>
                                            <FaPhoneAlt />
                                        </div>
                                        <div style={{display:'flex', alignItems:'center'}}>
                                            <div>
                                                <p><span>985678344</span></p>
                                                <p><span>Customer Support</span> </p>
                                                
                                            </div>
                                        </div>
                                </div>
                            </Nav>
                            </Container>
                        </Navbar>

                    </div>
            </div>
        </>
    );
};

export default Header;