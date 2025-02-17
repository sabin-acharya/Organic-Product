import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/mainLogo.png';
import Location from '../../assets/images/location.png';
// import Dropdown from '../../assets/images/dropdown.png';
import Cart from '../../assets/images/cart.png';
import Wishlist from '../../assets/images/wishlist.png';
import Account from '../../assets/images/account.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import IconText from '../icon-text';

const CustomDropdown = ({text='Location'}) => {
    return ( 
        <div className='flex-row d-flex justify-content-between align-items-center' style={{border: '1px solid #000', padding:'8px',borderRadius: '5px'}}>
            <img src={Location} style={{ width: '24px', height: '24px', marginRight: '10px' }} />
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
        <Nav.Link href={href}>{text}</Nav.Link>
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
                                All Category

                            </div>
                            <div className='search'>
                                <input type='text' />

                            </div>
                        </div>
                    </div>
                    <CustomDropdown/>
                    {/* right side list */}
                    <div className='flex-row d-flex justify-content-between' style={{ gap: '8px' }}>
                        {/* wishlist */}
                        <IconText icon={Wishlist} text='Wishlist' />
                        {/* cart */}
                        <IconText icon={Cart} text='Cart' />
                        {/* account */}
                        <IconText icon={Account}  />

                    </div>
                   

                </div>
                <div className='second-nav'>
                        <Navbar bg="light" data-bs-theme="light">
                            <Container>
                            <CustomDropdown text={'Browse all category'}/>
                            <Nav className="me-auto">
                                <CustomMenuNavLink text='Deals' href='#deals'/>
                                <CustomNavMenuDropdown text={'Home'}/>
                                <CustomMenuNavLink text='About' href='#about'/>
                                <CustomNavMenuDropdown text={'Shop'}/>
                                <CustomMenuNavLink text='Vendors' href='#vendors'/>
                                <CustomNavMenuDropdown text={'Vendors'}/>
                                <CustomNavMenuDropdown text={'Mega menu'}/>
                                <CustomNavMenuDropdown text={'Blog'}/>
                                <CustomNavMenuDropdown text={'Pages'}/>
                                <CustomMenuNavLink text='Contract' href='#Contract'/>
                            </Nav>
                            </Container>
                        </Navbar>

                    </div>
            </div>
        </>
    );
};

export default Header;