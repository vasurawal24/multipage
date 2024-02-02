import React from "react";

import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import { TiArrowDownThick } from "react-icons/ti";
import { IoMusicalNotes, IoStar } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { ImShuffle } from "react-icons/im";
import { RxLapTimer } from "react-icons/rx";

function Feature() {
    return (
        <>
            <section className='top_feature'>
                <Container>
                    <div className='space'></div>

                    <div className="txt">
                        <span className='dis'>DISCOVER</span>
                        <h1>Top Features</h1>
                        <span className='LINE'></span>
                        <div className='space'></div>
                    </div>
                    <Row>
                        <Col md={6} lg={4} className='d-flex mt-5'>
                            <div className='paren'>
                                <div>
                                    <IoMusicalNotes className='music'></IoMusicalNotes>
                                </div>
                                <h2>HD Sounds</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='d-flex mt-5'>
                            <div className='paren'>
                                <div>
                                    <RiPlayListFill className='music'></RiPlayListFill>
                                </div>
                                <h2>Playlist</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='d-flex mt-5'>
                            <div className='paren'>
                                <div>
                                    <IoStar className='music'></IoStar >
                                </div>
                                <h2>Favorites</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='d-flex mt-5'>
                            <div className='paren'>
                                <div>
                                    <FaHeartbeat className='music'></FaHeartbeat>
                                </div>
                                <h2>Mood Detector</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='d-flex mt-5'>
                            <div className='paren'>
                                <div>
                                    <ImShuffle className='music'></ImShuffle>
                                </div>
                                <h2>Shuffle</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='d-flex mt-5'>
                            <div className='paren'>
                                <div>
                                    <RxLapTimer className='music'></RxLapTimer >
                                </div>
                                <h2>Timer</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.

                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className='space'></div>
                    <div className='space'></div>
                </Container>
            </section>
        </>
    )
}

export default Feature;