import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import jsPDF from 'jspdf';
import backgroundImg from '../GiftCertificates/MC.js'

export default class GiftCertificateForm extends Component {
  
    constructor () {
        super()

        this.pdf = new jsPDF('landscape');
      
        this.state = {
            formControls: {
                fromName: {
                  value: ''
                },
                toName: {
                  value: ''
                },
                amount: {
                  value: ''
                }
            }
        }
    }
    
    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
      
        this.setState({
          formControls: {
              ...this.state.formControls,
              [name]: {
              ...this.state.formControls[name],
              value
            }
          }
        }, function(){
            this.generateCertificate();
            this.buildPDF();
        });
    }
    buildPDF = () => {
        var iframe = document.getElementById('pdf');
                        
        iframe.src = this.pdf.output('datauristring');
    }

    generateCertificate = () => {  
        this.pdf.addImage(backgroundImg, 'JPEG', 0, 0, 300, 220);
  
        this.pdf.text(67, 71, `${this.state.formControls.toName.value}`);
  
        this.pdf.text(67, 157, `${this.state.formControls.fromName.value}`);
    }


    downloadCertificate = () => {
        this.pdf.save();
    }
    
     render() {
        return (
            <Container>
                <form>
                    <div className="form-group">
                        <label for="organisations">Jeg har gitt til:</label>
                        <select className="form-control" name="organisations" id="organisations" >
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
                        <label>Til:</label>
                        <input type="text" 
                            className="form-control"
                            name="toName" 
                            value={this.state.formControls.toName.value} 
                            onChange={this.changeHandler} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Fra:</label>
                        <input type="text" 
                            className="form-control"
                            name="fromName" 
                            value={this.state.formControls.fromName.value} 
                            onChange={this.changeHandler} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Beløp:</label>
                        <input type="text" 
                            className="form-control"
                            name="amount" 
                            value={this.state.formControls.amount.value} 
                            onChange={this.changeHandler} 
                        />
                    </div>

                    <div className="form-group">
                        <input type="radio" id="christmas" name="occation" value="christmas"></input>
                        <label for="christmas">Julegave</label>
                        <input type="radio" id="birthday" name="occation" value="birthday"></input>
                        <label for="birthday">Bursdagsgave</label>
                    </div>
                </form> 
                <iframe className="col-12" id="pdf" height="780px" title="Certificate"></iframe>
                <button className="btn btn-dark col-12" id="downloadButton" onClick={this.downloadCertificate}>Jeg er fornøyd, last ned sertifikat</button>
            </Container>

        );
    }
  
  }
  