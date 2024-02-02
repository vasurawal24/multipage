import React from "react";
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import logo2 from './logo2.png';

function Footer() {
    return (
        <>
            <section>
                <div className='space'></div>
                <Container>
                    <Row>
                        <Col md={2}>
                            <img src={logo2}></img>
                        </Col>
                        <Col md={3} className='footer_txt'>
                            <ul className='list'>
                                <h4 style={{ color: '#1E1C23' }}>Company</h4>
                                <li> About Us</li>
                                <li> Jobs</li>
                                <li> Contant</li>
                            </ul>
                        </Col>
                        <Col md={2} className='footer_txt'>
                            <ul className='list'>
                                <h4 style={{ color: '#1E1C23' }}>Product</h4>
                                <li> Features</li>
                                <li> Pricing</li>
                                <li> Reviews</li>
                                <li> Downloand</li>
                            </ul>
                        </Col>
                        <Col md={2} className='footer_txt'>
                            <ul className='list'>
                                <h4 style={{ color: '#1E1C23' }}>Resources</h4>
                                <li> Blog</li>
                                <li> Video Tutorial</li>
                            </ul>
                        </Col>
                        <Col md={2} className='footer_txt'>
                            <h4 style={{ color: '#1E1C23' }}>Newsletter</h4>
                            <p style={{ color: '#1E1C23' }}>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
                            <input type='text' placeholder='Enter your Email'></input>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer;