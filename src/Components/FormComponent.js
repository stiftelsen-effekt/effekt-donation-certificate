import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import PersonalCertificate from './PersonalCertificate';
import GiftCertificateForm from './GiftCertificate';

export default class FormComponent extends React.Component {

    render() {
        return (
                <Tabs defaultActiveKey="gift" id="controlled-tab-example">
                    <Tab eventKey="gift" title="Gavesertifikat">
                        <GiftCertificateForm/>
                    </Tab>
                    <Tab eventKey="personal" title="Personlig Sertifikat">
                        <PersonalCertificate/>
                    </Tab>
                </Tabs>
        );
    }
}
