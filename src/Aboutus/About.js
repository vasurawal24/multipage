import React from "react";
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import tree from './1.jpg';

function About() {
    return (
        <>
            <div style={{position:'relative'}}>
                <img src={tree} style={{ width: '100%', height: '400px', objectFit: 'cover' }}></img>
                   <div style={{position:'absolute',top:'50%',left:'45%'}}>
                        <h1>About Us</h1>
                        <p>This is how it all began</p>
                   </div>
            </div>
        </>
    )
}
export default About;