import React from "react";
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import photo from './2.png';


function Ralex() {
    return (
        <>

            <section>
                <div className='space'></div>
                <Container>
                    <Row>
                        <Col className='d-none d-lg-block'>
                            <div>
                                <img src={photo}></img>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ color: 'black', marginTop: '50px' }}>
                                <h4>We started with passion</h4>
                                <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    <p style={{color:'black',marginTop:'10px'}}>


                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.


                                    </p>
                                </p>
                            </div>
                        </Col>

                    </Row>
                    <div className='space'></div>
                </Container>

            </section>

        </>
    )
}
export default Ralex;