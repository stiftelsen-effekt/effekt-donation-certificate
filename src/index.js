import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FormComponent from './Components/FormComponent';
import PDFComponent from './Components/PDFComponent';

ReactDOM.render(
  <React.StrictMode>
    <div className="row">
      <div className="col-6"><FormComponent /></div>
      <div className="col-6"><PDFComponent /></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
