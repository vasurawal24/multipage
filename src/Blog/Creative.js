import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import new1 from './new1.jpg';
import new2 from './new2.jpg';
import new3 from './new3.jpg';
import new4 from './new4.jpg';
import new5 from './new5.jpg';
import new6 from './new6.jpg';
function Creative() {
    return (
        <>
            <Container>
                <div className='space'></div>
                <Row>
                    <Col style={{marginBottom:'20px'}}>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={new1} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}> How to be creative</Card.Title>
                                <Card.Text style={{ color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <span style={{ color: 'black' }}>OCTOBER 28, 2020</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  style={{marginBottom:'20px'}}>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={new2} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}>How to relax your mind</Card.Title>
                                <Card.Text style={{ color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <span style={{ color: 'black' }}>OCTOBER 28, 2020</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  style={{marginBottom:'20px'}}>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={new3} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}> How to be productive</Card.Title>
                                <Card.Text style={{ color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <span style={{ color: 'black' }}>OCTOBER 28, 2020</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  style={{marginBottom:'20px'}}>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={new4} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}>How to be effective</Card.Title>
                                <Card.Text style={{ color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <span style={{ color: 'black' }}>OCTOBER 28, 2020</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  style={{marginBottom:'20px'}}>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={new5} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}> How to get inspiration</Card.Title>
                                <Card.Text style={{ color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <span style={{ color: 'black' }}>OCTOBER 28, 2020</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  style={{marginBottom:'20px'}}>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={new6} /> 
                            <Card.Body>
                                <Card.Title style={{fontWeight:'bolder'}}> Refresh your mind</Card.Title>
                                <Card.Text style={{ color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <span style={{ color: 'black' }}>OCTOBER 28, 2020</span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className='space'></div>
        </>
    )
}
export default Creative;