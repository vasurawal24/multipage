import React from "react";
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import men from './men.jpg';
import women2 from './women2.jpg';
import women3 from './women3.jpg';
import men2 from './men2.jpg';
function Team() {
    return (
        <>
            <section style={{ backgroundColor: '#F0F4FD' }}>
                <Container>
                    <Row>
                        <div style={{ position: 'relative' }}>
                            <div className="space"></div>
                            <div className="space"></div>
                            <h4 style={{ color: 'black', position: 'absolute', top: '35%', left: '43%' }}>Team Of Awesome</h4>
                        </div>
                        <Col>
                            <div className="img">
                                <img src={men}></img>
                            </div>
                            <div>
                                <h5 style={{ color: 'black' }}>Fynley Wilkinson</h5>
                                <p style={{ color: 'black' }}>Chief Creative Officer</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="img">
                                <img src={women2}></img>
                            </div>
                            <div>
                                <h5 style={{ color: 'black' }}>Myra Welsh</h5>
                                <p style={{ color: 'black' }}>Chief Technology Officer</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="img">
                                <img src={women3}></img>
                            </div>
                            <div>
                                <h5 style={{ color: 'black' }}>Aysha Shepard</h5>
                                <p style={{ color: 'black' }}>Chief Executive Officer</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="img">
                                <img src={men2}></img>
                            </div>
                            <div>
                                <h5 style={{ color: 'black' }}>Robyn Peel</h5>
                                <p style={{ color: 'black' }}>Director of Finance</p>
                            </div>
                            <div className="space"></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Team;