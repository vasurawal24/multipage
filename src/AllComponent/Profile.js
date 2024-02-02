import React from "react";
import { useState } from 'react';

import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';

import profile from './profile.png';


function Profile() {
    const [open, setOpen] = useState(false);
    const [cont, setCont] = useState(false);
    const [contant, setContant] = useState(false);
    return (
        <>
            <section className='profile_background'>
                <div className='space'></div>
                <Container>
                    <Row>
                        <Col className='d-none d-lg-block'>
                            <div>
                                <img src={profile}></img>
                            </div>
                        </Col>
                        <Col>
                            <div className='profile_txt'>
                                <span className='pro'>PROFILE</span>
                                <h1>Select a profile or create new one. You deciced!</h1>
                                <div>
                                    <Button
                                        onClick={() => setOpen(open ? false : true)}
                                        aria-controls="example-fade-text"
                                        aria-expanded={open}
                                    >
                                        <span>Sleep</span>
                                    </Button>
                                    <Button
                                        onClick={() => setCont(cont ? false : true)}
                                        aria-controls="example-fade-text"
                                        aria-expanded={cont}
                                    >
                                        <span>Sleep</span>
                                    </Button>
                                    <Button
                                        onClick={() => setContant(contant ? false : true)}
                                        aria-controls="example-fade-text"
                                        aria-expanded={contant}
                                    >
                                        <span>Sleep</span>
                                    </Button>
                                    <Fade in={open}>
                                        <div id="example-fade-text">
                                            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                                        </div>

                                    </Fade>
                                    <Fade in={cont} >
                                        <div id="example-fade-text" >
                                            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                                        </div>

                                    </Fade>

                                    <Fade in={contant}>
                                        <div id="example-fade-text">
                                            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                                        </div>

                                    </Fade>

                                </div>
                                <div className='d-flex'>
                                    <div className='more'>LEARN MORE</div>
                                    <div className='downlo'>DOWNLOAND</div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <div className='space'></div>
                </Container>

            </section>
        </>
    )
}
export default Profile;