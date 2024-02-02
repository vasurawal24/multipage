import React from "react";

import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import slider from './slider.png';



function Poster() {
    return (
        <>
            <section className='slider_sec'>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col md={6} >
                                    <img src={slider}></img>
                                </Col>

                                <Col md={6}>
                                    <div className='slider_txt d-none d-lg-block'>
                                        <h1>Help to improve focus for creative</h1>
                                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                                        <div className='d-flex'>
                                            <div className='more'>LEARN MORE</div>
                                            <div className='downlo'>DOWNLOAND</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section >

        </>
    )
}

export default Poster;