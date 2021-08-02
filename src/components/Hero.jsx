import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 text-center">
            <Container fluid={true}>
                <Row className="justify-content-center pt-5 pb-4">
                    <Col md={8} sm={12} className="p-0">
                        {props.title && <h1 className="display-3 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h3 className="display-4">{props.subTitle}</h3>}
                        {props.text && <h3 className="font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;