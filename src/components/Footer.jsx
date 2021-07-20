import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LIIcon from '../assets/images/LinkedInIcon.png'
import GHIcon from '../assets/images/GitHubIconWhite.png'

function Footer() {
    return (
        <footer className="mt-5 pt-5">
            <Container fluid={true}>
                <Row className="border-top p-3">

                    <Col className="p-0 d-flex justify-content-center align-items-center">
                        <a href="https://www.linkedin.com/in/robertkanejr/" rel="noopener noreferrer" target="_blank">
                            <img src={LIIcon} alt="My LinkedIn" />
                        </a>
                    </Col>

                    <Col className="p-0 d-flex justify-content-center align-items-center text-center">
                        Robert Kane, Jr. © 2021
                    </Col>

                    <Col className="p-0 d-flex justify-content-center align-items-center">
                        <a href="https://github.com/robertkanejr" rel="noopener noreferrer" target="_blank">
                            <img src={GHIcon} alt="My GitHub" />
                        </a>
                    </Col>

                </Row>
            </Container>
        </footer>
    )

}

export default Footer;