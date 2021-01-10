import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import jsPDF from 'jspdf';
import backgroundImg from '../GiftCertificates/MC.js'

export default class GiftCertificateForm extends Component {
  
    constructor (props) {
        super()

        this.pdf = new jsPDF('landscape');
      
        this.state = {
            fromName: props.from,
            toName: '',
            amount: props.amount,
            impact: '',
            organisationId: props.orgId,
            organisationName: this.setNameFromOrgId(props.orgId),
        }
    }

    componentDidMount(){
        this.generateCertificate();
        this.buildPDF();
    }
    
    changeHandler = event => {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({[nam]: val}, 
        function (){
            this.generateCertificate();
            this.buildPDF();
        });
    }

    handleChange  = event => {
        this.setState({organisationName: event.target.value});
    }

    generateCertificate = () => {  
        this.pdf.addImage(backgroundImg, 'JPEG', 0, 0, 300, 220);
  
        this.pdf.text(67, 71, `${this.state.fromName}`);
  
        this.pdf.text(67, 157, `${this.state.toName}`);

    }

    setNameFromOrgId = orgid => {
        //add enum
        switch (orgid) {
            case "1":
                return "malariaConsortium";
            default:
                break;
        }
    }

    calculateImpactFor = (id, amount) => {
        switch (1) {
            case value:
                
                break;
        
            default:
                break;
        }
    }

    buildPDF = () => {
        var iframe = document.getElementById('pdf');
                        
        iframe.src = this.pdf.output('datauristring');
    }

    downloadCertificate = () => {
        this.pdf.save();
    }
    
     render() {
        return (
            <Container>
                <form>
                    <div className="form-group">
                        <label htmlFor="organisationName">Jeg har gitt til:</label>
                        <select className="form-control" name="organisationName" id="organisationName" value={this.state.organisationName} onChange={this.changeHandler}>
                            <option value="giveWell">GiveWells tildelingsfond</option>
                            <option value="malariaConsortium">Malaria Consortium</option>
                            <option value="giveDirectly">GiveDirectly</option>
                            <option value="giveDirectlyBorgerlønn">GiveDirectly Borgerlønn</option>
                            <option value="SCIFoundation">SCI Foundation</option>
                            <option value="helenKellerInternational">Helen Keller International</option>
                            <option value="againstMalariaFoundation">Against Malaria Foundation</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Fra:</label>
                        <input type="text" 
                            className="form-control"
                            name="fromName" 
                            value={this.state.fromName} 
                            onChange={this.changeHandler} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Til:</label>
                        <input type="text" 
                            className="form-control"
                            name="toName" 
                            value={this.state.toName} 
                            onChange={this.changeHandler} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Beløp:</label>
                        <input type="text" 
                            className="form-control"
                            name="amount" 
                            value={this.state.amount} 
                            onChange={this.changeHandler} 
                        />
                    </div>
                </form> 
                <iframe className="col-12" id="pdf" height="780px" title="Certificate"></iframe>
                <button className="btn btn-dark col-12" id="downloadButton" onClick={this.downloadCertificate}>Jeg er fornøyd, last ned sertifikat</button>
            </Container>
        );
    }
  }