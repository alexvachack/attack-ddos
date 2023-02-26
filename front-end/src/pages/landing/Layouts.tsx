import React from 'react';
import {Container, Row, Col, OverlayTrigger, Tooltip, Card, Button, ListGroup} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    logoutUser,
} from '../../redux/actions';

// store
import { AppDispatch } from '../../redux/store';

// const
import { LayoutTypes, SideBarTheme, LayoutWidth, SideBarTypes } from '../../constants/';

// types
import { LayoutType } from './data';

// images
import brand1 from '../../assets/images/brands/bootstrap.png';
import brand2 from '../../assets/images/brands/html5.png';
import brand3 from '../../assets/images/brands/css3.png';
import brand4 from '../../assets/images/brands/react.png';
import brand5 from '../../assets/images/brands/sass.png';
import brand6 from '../../assets/images/brands/gulp.png';
import brand7 from '../../assets/images/brands/yarn.png';
import FeatherIcons from "feather-icons-react";
import cardImg from "../../assets/images/small/img-1.jpg";
import cardImg4 from "../../assets/images/small/img-4.jpg";
import cardImg2 from "../../assets/images/small/img-2.jpg";

interface LayoutsProps {
    layouts: LayoutType[];
}

const Layouts = ({ layouts }: LayoutsProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const getLayoutConfig = (layout: string) => {
        switch (layout) {
            case 'Vertical Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                return;
            case 'Horizontal Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_HORIZONTAL));
                return;
            case 'Semi Dark Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                dispatch(changeSidebarTheme(SideBarTheme.LEFT_SIDEBAR_THEME_DARK));
                return;
            case 'Fixed Width(Boxed) Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                dispatch(changeLayoutWidth(LayoutWidth.LAYOUT_WIDTH_BOXED));
                return;
            case 'Condensed Sidenav Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
                return;
            default:
                return;
        }
    };

    return (
        <section className="py-5 bg-body border-bottom border-top" id="demos">
            <Container>
                <Row className="py-3">
                    <Col lg={12}>
                        <div className="text-center">
                            <h1>Registro Nacional de Riders</h1>
                            <i className="uil uil-check text-success fs-15 me-1"></i> 61 Total
                            <i className="uil uil-check text-success fs-15 me-1"></i> 41 Motos
                            <i className="uil uil-check text-success fs-15 me-1"></i> 20 Bicicletas
                            <p className="text-muted mt-2 fs-15">
                                Unete a la comunidad rider más grande del país.
                            </p>
                        </div>
                    </Col>
                </Row>



                <Row className="mt-1">

                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/profile-photos/2xv1TsXTY7VPCEZ3fSe40tG4ap7IvBsaCfoDfapZ.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Victor Alexis
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> Motocross</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Inactivo
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Ver Perfil
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/profile-photos/1j4e1UzhOaLzSAN35MK61xo1TVhdIavKInIh4Pch.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Victor Alexis
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> MTB</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Vigente
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Ver Perfil
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="mb-4 mb-xl-0">
                            <Card.Img
                                height={250}
                                src='https://riderschilenos.cl/storage/profile-photos/nL9nvEbaNB8YC8jCUwZ05po7LIgimKnfHUynIUpD.jpg'/>
                            <Card.Body>
                                <Card.Title as="h5" className="fs-16">
                                    Francisco Quijada
                                </Card.Title>
                            </Card.Body>

                            <ListGroup variant="flush" className="text-muted">
                                <ListGroup.Item className="text-muted"><strong>Disciplina:</strong> Enduro-Moto</ListGroup.Item>
                            </ListGroup>

                            <Card.Body>
                                <Card.Link href="#" className="text-custom">
                                    Inactivo
                                </Card.Link>
                                <Card.Link href="#" className="text-custom">
                                    Ver Perfil
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12}>

                    </Col>
                </Row>

                <Row>
                    <Col className="text-center py-4">
                        <Link to="/" className="m-2 btn btn-success shadow-sm">
                            Ver todos
                            <i className="bi bi-arrow-right-short icon-xs ms-1"></i>
                        </Link>
                        <Link to="/" className="m-2 btn btn-danger shadow-sm">
                            Registrarme
                            <i className="bi bi-arrow-right-short icon-xs ms-1"></i>
                        </Link>
                    </Col>
                </Row>


            </Container>
        </section>
    );
};

export default Layouts;
