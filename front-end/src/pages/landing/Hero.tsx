import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// images
import backImg from '../../assets/images/covers/pattern.png';
import verticalImg from '../../assets/images/layouts/vertical-full-sm.png';

const Hero = () => {
    return (
        <section
            className="hero-section position-relative overflow-hidden px-3 text-dark pt-4 pb-0"
            style={{ background: `url(${backImg}) center top` }}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <Container>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <div className="mt-2 mb-5">
                            <h1 className="text-white">Obten tu suscripcion de Attack DDos - MatrixSoftware</h1>

                        </div>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col>
                        <img src="https://riderschilenos.cl/img/home/RIDERS-min.png" alt="" className="mx-auto d-block shadow img-fluid" />
                    </Col>
                    <Col>
                        <img src="https://riderschilenos.cl/img/home/REGISTRO2-min.png" alt="" className="mx-auto d-block shadow img-fluid" />
                    </Col>
                    <Col>
                        <img src="https://riderschilenos.cl/img/home/USADOS2-min.png" alt="" className="mx-auto d-block shadow img-fluid" />
                    </Col>
                    <Col>
                        <img src="https://riderschilenos.cl/img/home/VIDEO-min.png" alt="" className="mx-auto d-block shadow img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
