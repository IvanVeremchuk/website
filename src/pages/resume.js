
import React from 'react';
import './resume.css';

function Resume() {
    return (
        <>
            <div className="container-resume">
                <div className='resume'>
                    <a className='button-link' href="https://drive.google.com/file/d/1M5geKwATnPEBa2oW1lE5DqQ-H9WULw6W/view?usp=sharing" download="IvanVeremchukResume.pdf">
                        Download PDF
                    </a>
                    <a className='button-link' href="https://docs.google.com/document/d/19zcUQhyJZf0b5kIfLFJDqmQQnZICSigH/edit?usp=sharing&ouid=101388727716091087802&rtpof=true&sd=true" download="IvanVeremchukResume.docx">
                        Download docx
                    </a>
                    <a className='button-link' href="https://drive.google.com/file/d/18CHOlzdgWoR_tR_oUDcVb8-VA7aq-H9K/view?usp=sharing" download="IvanVeremchukResume.txt">
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