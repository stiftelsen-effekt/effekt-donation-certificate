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
                        <Tabs defaultActiveKey="personlig" className="col-12"
                              id="controlled-tab-example">
                            <Tab eventKey="personlig" title="Personlig Sertifikat" className="col-6">
                                <PersonalCertificate/>
                            </Tab>
                            <Tab eventKey="gave" title="Gave-Sertifikat" className="col-6">
                                <GiftCertificate/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        );
    }
}
