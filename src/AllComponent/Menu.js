import React from "react";

import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TiArrowDownThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from './logo.png';
// import logo from './image/logo.png';

function Menu() {
    return (
        <>
            <section className='body'>

                <Container>
                    <Navbar expand="lg d-flex  justify-content-end justify-content-md-between" className='header ' style={{backgroundColor:'#2A2836'}}>
                        <Container fluid className=' justify-content-end justify-content-lg-between g-2'>
                            <Navbar.Brand href="#" className="justify-content-start flex-grow-1 col"><img src={logo}></img> </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className=" my-2 my-lg-0"
                                    style={{ maxHeight: '100px',  }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1" > <Link to="/" style={{color:'white',textDecoration:'none'}} >Home</Link> </Nav.Link>
                                    <Nav.Link href="#action2" className='menu'> <Link to="/Aboutus" style={{color:'white',textDecoration:'none'}}>About US</Link> </Nav.Link>
                                    <Nav.Link href="#action2" className='menu'> <Link to="/Review" style={{color:'white',textDecoration:'none'}}> Review</Link> </Nav.Link>
                                    
                                    <Nav.Link href="#action1" className='menu'><Link to="/Blog" style={{color:'white',textDecoration:'none'}}> Blog</Link> </Nav.Link>
                                    <Nav.Link href="#action1" className='menu'><Link to="/Gallery" style={{color:'white',textDecoration:'none'}}> Gallery</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <div className="d-flex down d-none d-lg-block  download">
                                <TiArrowDownThick className='down  '></TiArrowDownThick> Downloand
                            </div>
                        </Container>
                    </Navbar>
                </Container>
            </section>


        </>
    )
}

export default Menu;