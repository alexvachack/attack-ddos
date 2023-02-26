import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { pagesListTypes } from './data';

interface PagesProps {
    pagesList: pagesListTypes[];
}

const Pages = ({ pagesList }: PagesProps) => {
    return (
        <section className="py-5 bg-body border-bottom border-top">
            <Container>
                <Row className="pb-3">
                    <Col lg={12}>
                        <div className="text-center">
                            <h1 className="mb-1">Ultimos Videos y Carreras</h1>
                            <p className="text-muted">
                                Compra y apoya las producciones nacionales.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-1">

                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/series/lpQidbKQCneq6XRCb7dK5BaLAyjMPkddVxrFYICZ.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Eventos
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> BMX</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Filmmaker:</strong> Cristian baeza Films</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Capitulos:</strong> 1</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Gratis
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Obtener
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/series/IjVLgXDvcPOJsdU8eltYqrcWp1VqWMZ1a1RFISTl.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Eventos
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> BMX</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Filmmaker:</strong> Cristian baeza Films</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Capitulos:</strong> 1</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Gratis
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Obtener
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/series/ZFCX9MZcsd9N6SSp7E9qkhC7ffVIwRLvgIeosGqDJF8sgROThk.png'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Eventos
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> BMX</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Filmmaker:</strong> Cristian baeza Films</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Capitulos:</strong> 1</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Gratis
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Obtener
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mt-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/series/Ao5adsp9PDEpLfRZD9l1q1VQ4PQpXdRZ703tgrFm.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Eventos
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> BMX</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Filmmaker:</strong> Cristian baeza Films</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Capitulos:</strong> 1</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Gratis
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Obtener
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mt-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='data:image/jpeg;base64,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'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Eventos
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> BMX</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Filmmaker:</strong> Cristian baeza Films</ListGroup.Item>
                                <ListGroup.Item className="text-muted"><strong>Capitulos:</strong> 1</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Gratis
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Obtener
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>

                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default Pages;
