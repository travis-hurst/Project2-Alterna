import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ClassNavigation.css';
import { useState } from 'react';

export const ClassNavigation = ({setOpenNavigation}) => {
    return(
        <>
        <div className='navigationBackground'>
          <link rel="stylesheet" href="ClassNavigation.css"></link>
          <div className="classTitle ann-box-header"> Classes </div>
          <div className="classes">
                <div className="classBox userInterface">
            <Popup trigger=
                {<b> User <br></br>Interface </b>} 
                modal nested>
                {
                    close => (
                        <div className='lockModal  classPopup'>
                            <div className='content courseInfo'>
                              <div className='lockTitle'>
                                <div className='moduleBlock'>
                                    <div className="className ann-box-header">User Interface</div>
                                    <div className='module'><b>Syllabus</b></div>
                                    <div className="syllabus moduleContent">UserInterfaceSyllabus.txt</div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 1 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 1
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 1
                                    </div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 2 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 2
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 2
                                    </div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 3 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 3
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 3
                                    </div>
                                </div>
                              </div>

                            </div>
                            <div className='enterButton'>
                                <button className='modal-footer-button modal-button-cancel' onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup>
            </div>
            <div className="classBox computerGraphics">
            <Popup trigger=
                {<b> Computer <br></br>Graphics </b>} 
                modal nested>
                {
                    close => (
                        <div className='lockModal classPopup'>
                            <div className='content  courseInfo'>
                              <div className='lockTitle'>
                                <div className='moduleBlock'>
                                    <div className="className ann-box-header">Computer Graphics</div>
                                    <div className='module'><b>Syllabus</b></div>
                                    <div className="syllabus moduleContent">ComputerGraphicsSyllabus.txt</div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 1 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 1
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 1
                                    </div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 2 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 2
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 2
                                    </div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 3 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 3
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 3
                                    </div>
                                </div>
                              </div>

                            </div>
                            <div className='enterButton'>
                                <button className='modal-footer-button modal-button-cancel' onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup>
            </div>
            <div className="classBox seniorDesign">
            <Popup trigger=
                {<b> Senior <br></br> Design </b>} 
                modal nested>
                {
                    close => (
                        <div className='lockModal  classPopup'>
                            <div className='content  courseInfo'>
                              <div className='lockTitle'>
                                <div className='moduleBlock'>
                                    <div className="className ann-box-header">Senior Design</div>
                                    <div className='module'><b>Syllabus</b></div>
                                    <div className="syllabus moduleContent">SeniorDesignSyllabus.txt</div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 1 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 1
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 1
                                    </div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 2 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 2
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 2
                                    </div>
                                </div>
                                <div className='moduleBlock'>
                                    <div className='module'>
                                    <b>
                                        Module 3 
                                    </b>
                                    </div>
                                    <div className='moduleContent'>
                                        Reading Assignment 3
                                    </div>
                                    <div className='moduleContent'>
                                        Coding Assignment 3
                                    </div>
                                </div>
                              </div>

                            </div>
                            <div className='enterButton'>
                                <button className='modal-footer-button modal-button-cancel' onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup>
            </div>
    
            
          </div>
          <button className='modal-footer-button modal-button-cancel-2' onClick=
                {() => {setOpenNavigation(false);}}>
                    Close
            </button>
        </div>

        </>
    )
}


export default ClassNavigation