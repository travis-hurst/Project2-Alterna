import React from "react";
import { useState } from "react";
import './Announcements.css'

export const Announcements = ({ openModalAnnouncements, setOpenAnnouncements }) => {
  const [input, setInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);

  return (
    <>
        <div className="modal-container">
        <div class="ann-box-header">Announcements</div>
            <div class="ann-box">
                <table class="table table-hover table-striped table-bordered caption-top">
                    <caption class="table-label"></caption>
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col" style={{width:'15%', maxwidth:'15%'}}>Time</th>
                        <th scope="col" style={{width:'15%', maxwidth:'15%'}}>Class</th>
                        <th scope="col" style={{width:'15%', maxwidth:'15%'}}>Teacher</th>
                        <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input></th>
                        <td>5:14 PM <br></br> 14 November, 2023</td>
                        <td>User Interface</td>
                        <td>Dr. Jillian Aurisano</td>
                        <td>Hey everyone I hope you are making good progress on your Alterna-Canvas project! Just a quick reminder that the final turn-in will be this Wednesday. If you have any last minutes questions or concerns feel free to reach out to me or the TA.</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input></th>
                        <td>12:10 PM <br></br> 14 November, 2023</td>
                        <td>Senior Design</td>
                        <td>Dr. Armando Dorado</td>
                        <td>There has been a change of date to Project 3 turn-in. Due to the recent events with our system going down, and the internet having issues, I need to let everyone know that the Project 3 due date has been extended from 20 November to 24 November at 11:59PM. </td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input></th>
                        <td>1:18 PM <br></br> 13 November, 2023</td>
                        <td>Computer Graphics</td>
                        <td>Dr. Felix Manchester</td>
                        <td>Recently we have been going over matrices and compiling 2-d images. I found some helpful links that came up during the class and wanted to share these with you all. The first one will involve using these to wrap 3-d objects, while the second can simplify vectors.</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input></th>
                        <td>10:11 AM <br></br> 13 November, 2023</td>
                        <td>Senior Design</td>
                        <td>Dr. Armando Dorado</td>
                        <td>Recently we have been going over matrices and compiling 2-d images. I found some helpful links that came up during the class and wanted to share these with you all. The first one will involve using these to wrap 3-d objects, while the second can simplify vectors.</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input></th>
                        <td>9:18 AM <br></br> 13 November, 2023</td>
                        <td>User Interface</td>
                        <td>Dr. Jillian Aurisano</td>
                        <td>This is the coolest project I have ever seen and I am so impressed by your group! Keep up the awesome work everyone!"</td>
                        </tr>
                        <br></br>
                        <hr style={{width:'5500%'}}></hr>
                        <tr>
                        <th scope="row"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input></th>
                        <td>4:32 PM <br></br> 12 November, 2023</td>
                        <td>Senior Design</td>
                        <td>Dr. Armando Dorado</td>
                        <td>Hello everyone and I hope you are having a good week. We will be going through the final two chapters this week leading up to the Final exam. A reminder that this will be at the usual meeting place on Dec 4, 2023 @ 2:00PM. Also I hope everyone is doing well on their final project this semester (Project 3)."</td>
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