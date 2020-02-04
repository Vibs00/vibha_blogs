import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import profile_pic from './image/profile_pic.webp';

export default class MainPage extends React.Component {
    render() {
        return (
            <Container style={{ padding: '0%', margin: '1%' }}>
                <Row>
                    <Col md={3}>
                        <Card style={{ textAlign: 'center' }}>
                            <Card.Img variant="top" src={profile_pic} style={{ borderRadius: '50%', width: '80%', alignSelf: 'center', marginTop: '5%', filter: 'brightness(50%)' }} />
                            <Card.Body style={{ padding: '0', paddingTop: '5%' }}>
                                <Card.Title>Let's Blog</Card.Title>
                                <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>About</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Technical</td>
                                            </tr>
                                            <tr>
                                                <td>Personal</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}