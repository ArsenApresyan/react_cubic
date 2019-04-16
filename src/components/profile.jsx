import React, { Component } from 'react';
import {Tab, Row, Col, Nav, Sonnet} from 'react-bootstrap';
class Profile extends Component {
    render() {
        return (
            <div className="mt-4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="ordered">Ordered</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="in_wh">In stock</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="on_way">On The Way</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="ordered">

                                <Row>
                                    <Col md={6}>
                                        <div className="cubic px-4 py-4 border">
                                            1st cubic
                                        </div> 
                                    </Col>
                                    <Col md={6}>
                                        <div className="cubic px-4 py-4 border">
                                            2nd cubic
                                        </div>
                                        
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="in_wh">
                                Warehouse
                            </Tab.Pane>
                            <Tab.Pane eventKey="on_way">
                                On the way
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default Profile;