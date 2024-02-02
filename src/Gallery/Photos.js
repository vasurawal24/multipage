import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
function Photos() {
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <div style={{marginTop:'90px'}}>
                            <img src={photo1} style={{width:'370px',height:'246px',borderRadius:'5px'}}></img>
                        </div>
                    </Col>
                    <Col>
                        <div style={{marginTop:'90px'}}>
                            <img src={photo2} style={{width:'370px',height:'246px',borderRadius:'5px'}}></img>
                        </div>
                    </Col>
                    <Col>
                        <div style={{marginTop:'90px'}}>
                            <img src={photo3} style={{width:'370px',height:'246px',borderRadius:'5px'}}></img>
                        </div>
                    </Col>
                    <Col>
                        <div style={{marginTop:'40px'}}>
                            <img src={photo4} style={{width:'370px',height:'246px',borderRadius:'5px'}}></img>
                        </div>
                    </Col>
                    <Col>
                        <div style={{marginTop:'40px'}}>
                            <img src={photo5} style={{width:'370px',height:'246px',borderRadius:'5px'}}></img>
                        </div>
                    </Col>
                    <Col>
                        <div style={{marginTop:'40px'}}>
                            <img src={photo6} style={{width:'370px',height:'246px',borderRadius:'5px'}}></img>
                        </div>
                    </Col>
                </Row>
                <div className='space'></div>
            </Container>
        </>
    )
}
export default Photos;