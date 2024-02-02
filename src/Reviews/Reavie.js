import React from "react";
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import pade from './tree.jpg';

function Reavie() {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <img src={pade} style={{ width: '100%', height: '400px', objectFit: 'cover' }}></img>
                <div style={{ position: 'absolute', top: '50%', left: '45%' }}>
                    <h1 style={{fontWeight:'bold'}}>Reviews </h1>
                    <p>Anim pariatur cliche reprehenderit</p>
                </div>
            </div>
        </>
    )
}
export default Reavie;