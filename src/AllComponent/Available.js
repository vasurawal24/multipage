import React from "react";
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';

import playstore from './playstore.png';
import appstore from './appstore.png';
import women from './women.png';
function Available() {
    return (
        <>
            <section className='Available'>
                <Container>
                    <Row>
                        <Col>
                            <div className='space'></div>
                            <div className='play_parent'>
                                <span className='DOWNLOAND'>DOWNLOAND</span>
                                <h1>Available on iOS and Android</h1>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt ab illo inventore veritatis et explicabo. Nemo enim ipsam voluptatem.</p>
                                <div>
                                    <img src={appstore}></img>
                                    <img src={playstore} style={{ marginLeft: '5px' }}></img>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='women'>
                                <img src={women}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Available;