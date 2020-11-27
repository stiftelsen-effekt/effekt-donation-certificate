import React from 'react';
const PDFDocument = require('pdfkit').default;
const blobStream  = require('blob-stream');

export default function PersonalCertificate() {

    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [amount, setAmount] = React.useState("");
  
    const handleSubmit = (event) => {
      console.log(`
        From: ${from}
        To: ${to}
        Amount: ${amount}
      `);

        // // Create a document
        // var doc = new PDFDocument;

        // // pipe the document to a blob
        // var stream = doc.pipe(blobStream());

        // //PDF
        // doc.fontSize(25).text("This is a PDF Doc");

        // // end and display the document in the iframe to the right
        // doc.end();
        // stream.on('finish', function() {
        //     // const blob = stream.toBlob('application/pdf');
        //   });
  
      event.preventDefault();
    }
  
    return (
            <React.Fragment>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label> Fra:</label>
                        <input name="from" type="text" value={from} onChange={e => setFrom(e.target.value)} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label> Til:</label>
                        <input name="to" type="text" value={to} onChange={e => setTo(e.target.value)} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label> Amount:</label>
                        <input name="amount" type="text" value={amount} onChange={e => setAmount(e.target.value)} className="form-control"/>
                    </div>

                    <button type="submit" value="Submit" className="btn btn-dark">Vis Sertifikat</button>
                </form>

                <iframe width="600" height="775"></iframe>
            </React.Fragment>
    );

}