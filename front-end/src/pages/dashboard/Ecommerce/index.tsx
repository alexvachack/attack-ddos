import React, {useState} from 'react';
import {Row, Col, Dropdown, ButtonGroup, Card, Form, Nav, Button} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import {Input} from 'antd';

// components
import ShreyuDatepicker from '../../../components/Datepicker';
import MembersList from '../../../components/MembersList';
import Tasks from '../../../components/Tasks';
import ChatList from '../../../components/ChatList';

import Statistics from './Statistics';
import OverView from './OverView';
import RevenueChart from './RevenueChart';
import TargetChart from './TargetChart';
import SalesChart from './SalesChart';
import Orders from './Orders';

// dummy data
import {orderDetails, topPerformers, tasks, chatMessages} from './data';
import {Link} from "react-router-dom";
import Select from "react-select";

import axios from 'axios';
import FeatherIcons from "feather-icons-react";
import {FormInput, VerticalForm} from "../../../components";
import {loginUser} from "../../../redux/auth/actions";

const EcommerceDashboard = () => {
    const [dateRange, setDateRange] = useState<any>([new Date(), new Date().setDate(new Date().getDate() + 7)]);
    const [startDate, endDate] = dateRange;
    const [dominio, setDominio] = useState('')

    const [cardAttackInfo, setCardAttackInfo] = useState(false)


    const onSubmit = (formData: any) => {
        console.log('onClickAttack');
        if (cardAttackInfo) {
            setCardAttackInfo(false);
            window.location.href = '/dashboard/ecommerce';
        } else {
            setCardAttackInfo(true);
            // WARNING: For POST requests, body is set to null by browsers.
            var data = new FormData();
            data.append("dominio", formData['email']);
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                }
            });
            xhr.open("POST", "http://127.0.0.1:5000/");
            xhr.send(data);
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="header-title">
                            Attack DDos - MatrixSoftware
                        </h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>

                        <Card.Body>
                            <p className="mb-1 mt-3 fw-bold">Domain</p>
                            <p className="text-muted fs-14">The entered domain must contain the http or https
                                protocols</p>
                            <VerticalForm
                                onSubmit={onSubmit}
                                defaultValues={{dominio: 'http://matrixsoftware.store'}}
                                formClass="authentication-form">
                                <FormInput
                                    type="text"
                                    name="email"
                                    startIcon={<FeatherIcons icon={'mail'} className="icon-dual"/>}
                                    placeholder={'http://exaple.com'}
                                    containerClass={'mb-3'}
                                />

                                <div className="mb-3 text-center d-grid">
                                    {cardAttackInfo ? (
                                        <Button type="submit" className='btn btn-danger'>
                                            {'Stop'}
                                        </Button>
                                    ) : (
                                        <Button type="submit">
                                            {'Attack'}
                                        </Button>
                                    )}
                                </div>
                            </VerticalForm>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default EcommerceDashboard;
