
import React from 'react';
import './resume.css';

function Resume() {
    return (
        <>
            <div className="container-resume">
                <div className='resume'>
                    <a className='button-link' href="IvanVeremchukResume.pdf" download>
                        Download PDF
                    </a>
                    <a className='button-link' href="IvanVeremchukResume.docx" download>
                        Download docx
                    </a>
                    <a className='button-link' href="IvanVeremchukResume.txt" download>
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