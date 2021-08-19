import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Robert Kane, Jr.',
            home: {
                title: 'Strive For Excellence',
                subTitle: 'BE RELENTLESS',
                text: 'Check out some of my work below'
            },
            about: {
                title: 'About Me',
            },
            contact: {
                title: 'Let\'s Connect',
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="light" variant="light" expand="lg" sticky="top" >
                        <Navbar.Brand>Robert Kane, Jr.</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="hamburger-menu" />
                        <Navbar.Collapse id="hamburger-menu">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                </Container>
            </Router>
        )
    }
}

export default Header;