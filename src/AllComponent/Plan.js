import React from "react";

import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import { FaCheck, FaStar } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';


function Plan() {
    return (
        <>
            <section className='Plan_Background'>
                <Container>
                    <div className='space'></div>
                    <div className="txt">
                        <span className='dis'>SELECT</span>
                        <h1 >Pricing Plans</h1>
                        <span className='LINE'></span>
                        <div className='space2'></div>
                        <span className='d-flex month'>Monthly
                            <Form>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                            Yearly
                        </span>
                    </div>
                    <Row>
                        <Col md={6} lg={4} className='d-flex' style={{ marginTop: '30px' }}>
                            <div className='plan_peran'>
                                <h2>Free</h2>
                                <span className='basic'>Basic</span>
                                <h6>$ <span style={{ fontSize: '50px' }}>0</span> p/mo</h6>
                                <ul>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>1 device</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Daily reminder</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Simple reporting</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Standart dashboard</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Email Notification</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}  ></FaCheck>Email Support</li>
                                </ul>
                                <hr></hr>
                                <span className='button'>SIGN UP NOW</span>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='d-flex' style={{ marginTop: '30px' }}>
                            <div className='plan_peran'>
                                <h2>Pro</h2>
                                <span className='basic'>For Individuals</span>
                                <h6>$ <span style={{ fontSize: '50px' }}>9.59</span> p/mo</h6>
                                <ul>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Up to 2 devices</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Daily reminder</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Detailed reporting</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Interactive dashboard</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Email and SMS notification</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}  ></FaCheck>24/7 Customer Support</li>
                                </ul>
                                <hr></hr>
                                <span className='button'>SIGN UP NOW</span>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='d-flex' style={{ marginTop: '30px' }}>
                            <div className='plan_peran'>
                                <h2>For Teams</h2>
                                <span className='basic'>Best for organization</span>
                                <h6>$ <span style={{ fontSize: '50px' }}>24.99</span> p/mo</h6>
                                <ul>
                                    <li><FaCheck style={{ marginRight: '8px', Color: '#8167E6' }}></FaCheck>Up to 10 devices</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Daily reminder</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Detailed reporting</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Interactive dashboard</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Email and SMS notification</li>
                                    <li><FaCheck style={{ marginRight: '8px' }}  ></FaCheck>24/7 Customer Support</li>
                                </ul>
                                <hr></hr>
                                <span className='button'>SIGN UP NOW</span>

                            </div>

                        </Col>
                        <span style={{ textAlign: 'center', marginTop: '35px' }}>Price shown are in USD and VAT inclusive.</span>
                    </Row>
                </Container>
                <div className='space2'></div>
            </section>

            <section className='Plan_Background'>
                <Container>
                    <div className='FAQ'>
                        <h1>FAQ</h1>
                        <span className='LINE'></span>
                    </div>
                    <div className='space'></div>
                    <Row>
                        <Col md={6}>
                            <Accordion>
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header> How do i get the app for my phone?</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What plan I should choose?</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What happen to my app if I stop paying?</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col md={6}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Does it have in-app purchases?</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can I use this app on multiple devices?</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Is my phone supported for this app?</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                    <div className='space'></div>
                </Container>
            </section>
        </>
    )
}

export default Plan;