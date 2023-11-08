import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ClassNavigation.css';

function ClassNavigation() {
    return(
        <div>
          <link rel="stylesheet" href="ClassNavigation.css"></link>
          <div className="classTitle"> Classes </div>
          <div className="classes">
            <div className="classBox">
            <Popup trigger=
                {<b> User Interface </b>} 
                modal nested>
                {
                    close => (
                        <div className='lockModal'>
                            <div className='content'>
                              <div className='lockTitle'>
                                <div className='moduleBlock'>
                                    <div className="className">User Interface</div>
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
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup>
            </div>
            <div className="classBox">
            <Popup trigger=
                {<b> Finite Automata </b>} 
                modal nested>
                {
                    close => (
                        <div className='lockModal'>
                            <div className='content'>
                              <div className='lockTitle'>
                                <div className='moduleBlock'>
                                    <div className="className">Finite Automata</div>
                                    <div className='module'><b>Syllabus</b></div>
                                    <div className="syllabus moduleContent">FiniteAutomataSyllabus.txt</div>
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
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup>
            </div>
            <div className="classBox">
            <Popup trigger=
                {<b> Senior Design </b>} 
                modal nested>
                {
                    close => (
                        <div className='lockModal'>
                            <div className='content'>
                              <div className='lockTitle'>
                                <div className='moduleBlock'>
                                    <div className="className">Senior Design</div>
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
                                <button onClick=
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
            
        </div>
        
    )
}


export default ClassNavigation