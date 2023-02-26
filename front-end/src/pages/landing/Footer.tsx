import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import backImg from '../../assets/images/covers/pattern.png';
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const Footer = () => {
    return (
        <footer className="pt-5 pb-3 position-relative" style={{ background: `url(${backImg}) center top` }}>
            <Container>

                <Row>
                    <Col lg={12}>
                        <div className="mt-5">
                            <a href='https://twitter.com/alexvachack'></a>
                            <p className="mt-4 text-center mb-0 text-white">© {new Date().getFullYear()} MatrixSoftware. Design and coded by Alexvachack</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
