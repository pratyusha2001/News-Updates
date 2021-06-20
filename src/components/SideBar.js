import React, { useState, useEffect } from 'react';
import CardView from './CardView';
import { Card, CardDeck, Row } from 'react-bootstrap';
import { Tab, Tabs, Col, Nav } from "react-bootstrap";
import ListView from './ListView';

const SideBar = () => {
    return (
        <div>
            <div class="sidebar">
                <div>
                    <Card style={{ textAlign: 'center', marginBottom:'1rem' }}>
                        <Card.Body>
                            <Card.Title>Hi Readers!</Card.Title>
                            <Card.Text>
                                Here's your News!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ textAlign: 'center', cursor: 'pointer', paddingBottom: '2rem',  marginBottom:'1rem' }}>
                        <Card.Body>
                            <Card.Title>View Toggle</Card.Title>
                        </Card.Body>
                    </Card>

                </div>
                <div>
                    <Card style={{ textAlign: 'center', marginBottom:'1rem'}}>
                        <Card.Body>
                            <Card.Title>Have a Feedback?</Card.Title>
                            <Card style={{ backgroundColor: 'aquamarine' }}>
                                <Card.Body>
                                    <Card.Text>We're listening</Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col>
                        <Nav className="flex-column " style={{ textAlign: 'right'}}>
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="toggle" style={{ textAlign: 'right'}}> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16 ">
                                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                    <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                                                </svg></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="toggle2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                                </svg></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <CardView />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ListView />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>

    )
}
export default SideBar;