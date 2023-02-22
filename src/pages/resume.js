
import React from 'react';
import './resume.css';

function Resume() {
    return (
        <>
            <div className="container-resume">
                <div className='resume'>
                    <a className='button-link' href="https://github.com/IvanVeremchuk/portfolio/blob/main/src/pages/IvanVeremchukResume.pdf" download="IvanVeremchukResume.pdf">
                        Download PDF
                    </a>
                    <a className='button-link' href="https://github.com/IvanVeremchuk/portfolio/blob/main/src/pages/IvanVeremchukResume.docx" download="IvanVeremchukResume.docx">
                        Download docx
                    </a>
                    <a className='button-link' href="https://github.com/IvanVeremchuk/portfolio/blob/main/src/pages/IvanVeremchukResume.txt" download="IvanVeremchukResume.txt">
                        Download txt
                    </a>
                </div>
                <hr className='x'></hr>
                <div className="image-c">
                    <div className='image2'></div>
                </div>
            </div>
        </>
    );
  }

export default Resume;