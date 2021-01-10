import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalCertificate from './PersonalCertificate';
import GiftCertificateForm from './GiftCertificate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//rename
export default class FormComponent extends React.Component {

    render() {
      const urlParams = new URLSearchParams(window.location.search);

      const from = urlParams.get('from');
      const amount = urlParams.get('amount');
      const orgId = urlParams.get('orgId');

        return (
          <Router>
            <Switch>
              <Route path="/gift">
                <GiftCertificateForm from={from} amount={amount} orgId={orgId}/>
              </Route>
              <Route path="/personal">
                <PersonalCertificate />
              </Route>
            </Switch>
        </Router>
        );
    }
}
