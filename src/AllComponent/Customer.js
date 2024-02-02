import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import { FaCheck, FaStar } from "react-icons/fa6";

function Customer() {

    const option = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    }
    return (
        <>
            <section className='customer'>
                <Container>
                    <div className='space'></div>
                    <div className="txt">
                        <span className='dis'>LATEST</span>
                        <h1>Customer Reviews</h1>
                        <span className='LINE'></span>
                        <div className='space'></div>
                    </div>
                    <OwlCarousel className='owl-theme' loop margin={10}  {...option}>
                        <div class='item Customer_paren' >

                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Pretty Awesome!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>John,Pixar Studio</span>
                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Excellent!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>Sarah, Microsoft</span>
                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Unbelievable!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>Michael, Apple</span>
                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Fantastic!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>Thomas, Samsung</span>
                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Easy to use!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>John, Pixar Studio</span>

                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Beauty Interface!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>Sarah, Microsoft</span>
                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Great App!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>Michael, Apple</span>
                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Love It!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>Thomas, Samsung</span>
                        </div>
                        <div class='item Customer_paren'>
                            <div className="Gstar">
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                                <FaStar className="star"></FaStar>
                            </div>
                            <h3>Pretty Awesome!</h3>
                            <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
                            </p>
                            <span style={{ color: '#8167e6' }}>John, Pixar Studio</span>
                        </div>
                    </OwlCarousel>
                    <div className='space'></div>
                </Container>
            </section>
        </>
    )
}

export default Customer;