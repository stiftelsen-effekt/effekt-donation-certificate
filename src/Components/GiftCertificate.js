import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import jsPDF from 'jspdf';
import exampleImg from '../GiftCertificates/HKI.js';
import backgroundImg from '../GiftCertificates/MC.js'

export default class GiftCertificateForm extends Component {
  
    constructor () {
        super()
      
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
        }, function(){this.generateCertificate()});
    }

    generateCertificate = () => {
        var pdf = new jsPDF('landscape');
  
        pdf.addImage(backgroundImg, 'JPEG', 0, 0, 300, 220);
  
        pdf.text(67, 71, `${this.state.formControls.toName.value}`);
  
        pdf.text(67, 157, `${this.state.formControls.fromName.value}`);

        var iframe = document.getElementById('pdf');
                        
        iframe.src = pdf.output('datauristring');
    }

    downl
    
     render() {
        return (
            <Container>
                <form>
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
                </form> 
                <iframe className="col-12" id="pdf" height="780px"></iframe>
                <button className="btn btn-dark col-12" id="downloadButton" onClick={this.generateCertificate}>Jeg er fornøyd, last ned sertifikat</button>

            </Container>

        );
    }
  
  }
  