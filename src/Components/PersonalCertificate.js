
import React from 'react';
import jsPDF from 'jspdf';

export default function PersonalCertificate() {

    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [amount, setAmount] = React.useState("");
  
    const handleSubmit = (event) => {

      var doc = new jsPDF('landscape');

    //   doc.addImage(bilde, 'JPEG', 0, 0, 320, 220);

      doc.text(193, 67, `${from}`);

      doc.text(100, 67, `${to}`);


      doc.save("generated.pdf");
    }
  
    return (
            <React.Fragment>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label> Til:</label>
                        <input name="to" type="text" className="form-control" value={to} onChange={e => setTo(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label> Fra:</label>
                        <input name="from" type="text" className="form-control" value={from} onChange={e => setFrom(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label> Amount:</label>
                        <input name="amount" type="text" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} />
                    </div>

                    <button type="submit" value="Submit" className="btn btn-dark">Vis Sertifikat</button>
                </form>
            </React.Fragment>
    );


}