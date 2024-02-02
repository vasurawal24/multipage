import React from "react";

import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';


function Member() {
    return (
        <>
            <section className='member'>
                <Container>
                    <div className='space'></div>
                    <Row>
                        <Col md={3}>
                            <h2 style={{ color: '#8167E6' }}>2010</h2>
                            <h5>Year we've founded</h5>
                        </Col>
                        <Col md={3}>
                            <h2 style={{ color: '#8167E6' }}>3m</h2>
                            <h5>Monthly active users</h5>
                        </Col>
                        <Col md={3}>
                            <h2 style={{ color: '#8167E6' }}>100+</h2>
                            <h5>Team members</h5>
                        </Col>
                        <Col md={3}>
                            <h2 style={{ color: '#8167E6' }}>75</h2>
                            <h5>Countries using our product</h5>
                        </Col>
                    </Row>
                    <div className='space'></div>
                </Container>
            </section>
        </>
    )
}

export default Member;