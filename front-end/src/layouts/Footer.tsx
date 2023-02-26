import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col sm={12} className='text-center'>
                        {currentYear} &copy; MatrixSoftware by <Link to="https://twitter.com/alexvachack">Alexvachack</Link>
                    </Col>

                </Row>
            </div>
        </footer>
    );
};

export default Footer;
