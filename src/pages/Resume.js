import React from 'react';
import './Resume.css';
import resumePdf from '../Resume v1.0.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="page-container">
        <h1 className="section-title">My Resume</h1>
        <p className="resume-intro">
          View my complete resume below, or download a copy for your records.
        </p>
        
        <div className="resume-actions">
          <a 
            href={resumePdf} 
            download="Jimmy_Padilla_Resume.pdf"
            className="btn btn-primary"
          >
            Download PDF
          </a>
          <a 
            href={resumePdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Open in New Tab
          </a>
        </div>

        <div className="resume-viewer">
          <iframe
            src={resumePdf}
            width="100%"
            height="800px"
            title="Jimmy Padilla Resume"
            style={{ border: 'none', borderRadius: '8px' }}
          >
            <p>
              Your browser does not support PDFs. 
              <a href={resumePdf} download="Jimmy_Padilla_Resume.pdf">
                Download the PDF
              </a> instead.
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Resume;