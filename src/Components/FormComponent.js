import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Tabs, Tab } from 'react-bootstrap';
import PersonalCertificate from './PersonalCertificate';
import GiftCertificate from './GiftCertificate';

export default class FormComponent extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="personlig" 
                              id="controlled-tab-example">
                            <Tab eventKey="personlig" title="Personlig Sertifikat">
                                <PersonalCertificate/>
                            </Tab>
                            <Tab eventKey="gave" title="Gave-Sertifikat">
                                <GiftCertificate/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        );
    }
}
