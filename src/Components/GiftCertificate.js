import React from 'react';

export default function GiftCertificate() {

    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [amount, setAmount] = React.useState("");
  
    const handleSubmit = (event) => {
      console.log(`
        From: ${from}
        To: ${to}
        Amount: ${amount}
      `);
  
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
            </React.Fragment>
    );

}