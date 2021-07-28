import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import Content from '../components/Content';


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        Axios.post('https://rck-portfolio-backend.herokuapp.com/contact', this.state)
            .then(res => {
                return window.location.href = '/'
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <Form className="py-5 my-5 px-3 mx-3" action="contact" method="post">
                        <Container>
                            <Form.Group>
                                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                <Form.Control id="full-name" name="name" type="text" placeholder="John Doe" size="lg" value={this.state.name} onChange={this.handleChange} />
                            </Form.Group>


                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control id="email" name="email" type="email" placeholder="email@example.com" size="lg" value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>


                            <Form.Group>
                                <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control id="message" name="message" as="textarea" style={{ height: '150px' }} placeholder="Write your message here." size="lg" value={this.state.message} onChange={this.handleChange} />
                            </Form.Group>
                        </Container>
                        <Col className="d-flex flex-column align-items-center pt-3">
                            <Button className="" id="form-button" type="submit" onClick={this.handleSubmit}>
                                Send
                            </Button>
                        </Col>
                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div >
        );
    }
}

export default ContactPage;