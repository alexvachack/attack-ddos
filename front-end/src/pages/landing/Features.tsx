import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import img1 from '../../assets/images/widgets-sample/1.png';
import img2 from '../../assets/images/widgets-sample/2.png';
import img3 from '../../assets/images/widgets-sample/3.png';
import img4 from '../../assets/images/widgets-sample/4.png';
import img5 from '../../assets/images/widgets-sample/5.png';
import img6 from '../../assets/images/widgets-sample/6.png';
import img7 from '../../assets/images/widgets-sample/8.png';
import img8 from '../../assets/images/widgets-sample/9.png';
import img9 from '../../assets/images/widgets-sample/10.png';
import img10 from '../../assets/images/widgets-sample/14.png';

const Features = () => {
    return (
        <section className="py-5 bg-body border-bottom border-top">
            <Container>
                <Row className="pb-3">
                    <Col lg={12}>
                        <div className="text-center">
                            <h1>
                                Compra y Venta Rider
                            </h1>
                            <p className="text-muted mt-2">
                                Bicicletas, Motos y Otros.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-1">

                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/vehiculos/YRHuRKhThr2c3M2CGhZe5qR6HdxpI1mMuF49Tg1L.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">

                                    Sea-Doo SPARK900cc 2014
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Tipo:</strong> Motocross</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Año:</strong> 2018</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>

                                <Card.Link href="#" className="text-custom">
                                    Ver mas informacion
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/vehiculos/wtO9AUhQ4wCnTYB1pZZKvEGFlX6lsUgKk8AKKxto.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    CANNONDALE JEKYLL 2018
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Tipo:</strong> Motocross</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Año:</strong> 2018</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>

                                <Card.Link href="#" className="text-custom">
                                    Ver mas informacion
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/vehiculos/TVF8BRWztE2YE52RXvELB7gQQm5biuxcrXCOUITA.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    HONDA CRF 250 RX250 2020
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Tipo:</strong> Motocross</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Año:</strong> 2018</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>

                                <Card.Link href="#" className="text-custom">
                                    Ver mas informacion
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row>
                    <Col className="text-center py-4">
                        <Link to="/" className="m-2 btn btn-success shadow-sm">
                            Ver todos
                            <i className="bi bi-arrow-right-short icon-xs ms-1"></i>
                        </Link>
                        <Link to="/" className="m-2 btn btn-danger shadow-sm">
                            Publicar
                            <i className="bi bi-arrow-right-short icon-xs ms-1"></i>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
