import React from "react";
import { useState, useEffect } from "react";
import './Announcements.css'

export const Announcements = ({ openModalAnnouncements, setOpenAnnouncements }) => {

  return (
    <>
        <div className="modal-container">
        <div className="ann-box-header">Announcements</div>
            <div className="ann-box">
                <table className="table table-hover table-striped table-bordered caption-top">
                    <caption className="table-label"></caption>
                    <thead>
                        <tr>
                        <th scope="col" style={{fontSize:'22px'}}>Read</th>
                        <th scope="col" style={{width:'15%', maxwidth:'15%', fontSize:'22px'}}>Time</th>
                        <th scope="col" style={{width:'15%', maxwidth:'15%', fontSize:'22px'}}>Class</th>
                        <th scope="col" style={{width:'15%', maxwidth:'15%', fontSize:'22px'}}>Teacher</th>
                        <th scope="col" style={{fontSize:'22px'}}>Message</th>
                        </tr>
                        <hr style={{width:'5500%'}}></hr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><input className="form-check-input me-1" type="checkbox" value="" id="checkbox1"></input></th>
                        <td>5:14 PM <br></br> 14 November</td>
                        <td>User Interface</td>
                        <td>Dr. Jillian Aurisano</td>
                        <td style={{textAlign:'justify'}}>Hey everyone I hope you are making good progress on your Alterna-Canvas project! Just a quick reminder that the final turn-in will be this Wednesday. If you have any last minutes questions or concerns feel free to reach out to me or the TA.</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input className="form-check-input me-1" type="checkbox" value="" id="checkbox2"></input></th>
                        <td>12:10 PM <br></br> 14 November</td>
                        <td>Senior Design</td>
                        <td>Dr. Armando Dorado</td>
                        <td style={{textAlign:'justify'}}>There has been a change of date to Project 3 turn-in. Due to the recent events with our system going down, and the internet having issues, I need to let everyone know that the Project 3 due date has been extended from 20 November to 24 November at 11:59PM. </td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input className="form-check-input me-1" type="checkbox" value="" id="checkbox3"></input></th>
                        <td>1:18 PM <br></br> 13 November</td>
                        <td>Computer Graphics</td>
                        <td>Dr. Felix Manchester</td>
                        <td style={{textAlign:'justify'}}>Recently we have been going over matrices and compiling 2-d images. I found some helpful links that came up during the class and wanted to share these with you all. The first one will involve using these to wrap 3-d objects, while the second can simplify vectors.</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input className="form-check-input me-1" type="checkbox" value="" id="checkbox4"></input></th>
                        <td>10:11 AM <br></br> 13 November</td>
                        <td>Senior Design</td>
                        <td>Dr. Armando Dorado</td>
                        <td style={{textAlign:'justify'}}>Recently we have been going over matrices and compiling 2-d images. I found some helpful links that came up during the class and wanted to share these with you all. The first one will involve using these to wrap 3-d objects, while the second can simplify vectors.</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input className="form-check-input me-1" type="checkbox" value="" id="checkbox5"></input></th>
                        <td>9:18 AM <br></br> 13 November</td>
                        <td>User Interface</td>
                        <td>Dr. Jillian Aurisano</td>
                        <td style={{textAlign:'justify'}}>This is the coolest project I have ever seen and I am so impressed by your group! Keep up the awesome work everyone!"</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input className="form-check-input me-1" type="checkbox" value="" id="checkbox6"></input></th>
                        <td>4:32 PM <br></br> 12 November</td>
                        <td>Senior Design</td>
                        <td>Dr. Armando Dorado</td>
                        <td style={{textAlign:'justify'}}>Hello everyone and I hope you are having a good week. We will be going through the final two chapters this week leading up to the Final exam. A reminder that this will be at the usual meeting place on Dec 4, 2023 @ 2:00PM. Also I hope everyone is doing well on their final project this semester (Project 3)."</td>
                        </tr>
                        <br></br>
                        <br></br>
                    </tbody>
                    </table>        
            </div>
        <div>
            <button className="modal-footer-button modal-button-cancel" onClick={() => {setOpenAnnouncements(false);}}>
            Close
            </button>
        </div>
        </div>
    </>
  );
};