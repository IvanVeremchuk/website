
import React from 'react';
import './resume.css';

function Resume() {
    return (
        <>
            <div className="container-resume">
                <div className='resume'>
                    <a className='button-link' href="https://drive.google.com/file/d/1Pc86gVHtf2odtQdibM6Uit4vf2lVgbLz/view?usp=share_link" download="IvanVeremchukResume.pdf">
                        Download PDF
                    </a>
                    <a className='button-link' href="https://docs.google.com/document/d/1XsWN2X_BiBuZNz5y6DaZn9Gj15arW7Im/edit?usp=share_link&ouid=101388727716091087802&rtpof=true&sd=true" download="IvanVeremchukResume.docx">
                        Download docx
                    </a>
                    <a className='button-link' href="https://drive.google.com/file/d/1YUREtgBg-WbV69iBd3hnMjs8T0KkHSZs/view?usp=share_link" download="IvanVeremchukResume.txt">
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