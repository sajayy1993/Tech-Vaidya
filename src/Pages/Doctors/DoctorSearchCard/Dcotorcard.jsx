import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../../Common/Footer/Footer'
import Navbar from '../../../Common/Navbar/Navbar'
import './doctorcard.css'

const Dcotorcard = () => {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate();

    const goToDocprofile =()=>{
        navigate('/doctorprofile')
    }

    return (
        <>

  <Navbar/>
        <div className='cardcontainer'>
            <div className='cardmain-container'>
                <div className='cardinputs'>
                    <div className='cardinput_serach'>
                        <i class="ri-search-line searchicon"></i>
                        <input type='text' placeholder='Search Doctor by name, specialization, city...' />
                    </div>
                    <div className='cardspan' onClick={() => setOpen(!open)}>
                        <span className='cardsearchspecial'>
                            Special Speciality
                            <i class="ri-arrow-drop-down-fill"></i>
                        </span>
                        {open && <div className='options'>
                            <p>Cardiology</p><hr />
                            <p>Neurology</p><hr />
                            <p>Urology</p><hr />
                            <p>Surgical Treatment</p><hr />
                            <p>Orthopaedics</p><hr />
                            <p>Bone Specialists</p><hr />
                        </div>
                        }
                    </div>

                </div>
                <div className='Doccard-main'>
                    <div className='side-bar'>
                        <div className='gender-bar'>
                            <h4>Gender</h4>
                            <input type="checkbox" id="male" name="male" value="male" />
                            <label for="vehicle1"> Male</label><br />
                            <input type="checkbox" id="male" name="male" value="female" />
                            <label for="vehicle1"> Female</label><br />
                        </div>
                        <div className='rating-bar'>
                            <h4>Rating</h4>
                           <div className='rating5'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <div className='rating4'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div className='rating5'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        <div className='gender-bar'>
                            <h4>Avilability</h4>
                            <input type="checkbox" id="time9to12" name="time9to12" value="time9to12" />
                            <label for="time9to12"> 09.00am to 12.00pm</label><br />
                            <input type="checkbox" id="time12to14" name="time12to14" value="time12to14" />
                            <label for="time12to14"> 12.00pm to 14.00pm</label><br />
                            <input type="checkbox" id="time14to16" name="time14to16" value="time14to16" />
                            <label for="time9to12"> 14.00pm to 16.00pm</label><br />
                            <input type="checkbox" id="time16to18" name="time16to18" value="time16to18" />
                            <label for="time9to12"> 16.00pm to 18.00pm</label><br />
                            <input type="checkbox" id="time18to20" name="time14to16" value="time18to20" />
                            <label for="time9to12"> 18.00pm to 20.00pm</label><br />
                            <input type="checkbox" id="time20to22" name="time20to22" value="time20to22" />
                            <label for="time9to12"> 20.00pm to 22.00pm</label><br />
                        </div>
                        <div className='gender-bar'>
                            <h4>Fee</h4>
                            <input type="checkbox" id="under1000" name="under1000" value="under1000" />
                            <label for="vehicle1"> 500-1000 Rs</label><br />
                            <input type="checkbox" id="under2000" name="under2000" value="under2000" />
                            <label for="vehicle1"> 1000-2000 Rs</label><br />
                            <input type="checkbox" id="under3000" name="under3000" value="under3000" />
                            <label for="vehicle1"> 2000-3000 Rs</label><br />
                            <input type="checkbox" id="under3000A" name="under3000A" value="under3000A" />
                            <label for="vehicle1"> 3000-Above Rs</label><br />
                        </div>
                    </div><hr/>
                    <div className='right-sidebar'>
                    <div className='feecard'>
                        <img src='https://previews.123rf.com/images/karelnoppe/karelnoppe1408/karelnoppe140800011/30606941-close-up-portrait-of-young-male-doctor-isolated-on-white-background-.jpg' alt='doc-pic' />
                        <div className='feecard-Ucontent'>
                            <p>Name - Dr. Ankur Yadav</p>
                            <p>Speciality - Orthopaedics</p>
                            <p>Degree - M.D and M.S</p>
                            <p>Gender - Male</p>
                        </div>
                        <div className='feecard-Lcontent'>
                        <div className='rating-L'>
                        <h5>Rating</h5>
                                <span className="fa fa-star checked" ></span>
                                <span className="fa fa-star checked"></span>
                                <span  className="fa fa-star checked"></span>
                                <span  className="fa fa-star not-checked"></span>
                                <span  className="fa fa-star not-checked"></span>
                            </div>
                            <div className='availabilty-L'>
                                <h5>Availabilty</h5>
                                <p>Mon Wed Thu Sat</p>
                            </div>
                            <div className='time-L'>
                                <h5>Timing</h5>
                                <p> 09.00am To 14.00pm</p>
                            </div>
                        </div>
                        <div className='doc-fees'>
                        <h4>600 Rs/-</h4>
                        <button onClick={()=>goToDocprofile()}>Book Appointment</button>
                    </div>
                    
                    </div>
                    <div className='feecard'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIr4y04KLDoZXZWXxqpwkrKPd3uWyDQJ3Jg&usqp=CAU' alt='doc-pic' />
                        <div className='feecard-Ucontent'>
                            <p>Name - Dr. Aarti Kushwah</p>
                            <p>Speciality - Gynecologist</p>
                            <p>Degree - M.D and M.S</p>
                            <p>Gender - Female</p>
                        </div>
                        <div className='feecard-Lcontent'>
                        <div className='rating-L'>
                        <h5>Rating</h5>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span  className="fa fa-star checked"></span>
                                <span  className="fa fa-star not-checked"></span>
                            </div>
                            <div className='availabilty-L'>
                                <h5>Availabilty</h5>
                                <p>Mon Wed Thu Sat</p>
                            </div>
                            <div className='time-L'>
                                <h5>Timing</h5>
                                <p> 10.00am To 14.00pm</p>
                            </div>
                        </div>
                        <div className='doc-fees'>
                        <h4>750 Rs/-</h4>
                        <button>Book Appointment</button>
                    </div>
                    
                    </div>
                    <div className='feecard'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4elavUFw2ksRCQJw5wLn9MdiLwnURG2dBw&usqp=CAU' alt='doc-pic' />
                        <div className='feecard-Ucontent'>
                            <p>Name - Dr. Joshef Disoza</p>
                            <p>Speciality - Cardiologist</p>
                            <p>Degree - M.D </p>
                            <p>Gender - Male</p>
                        </div>
                        <div className='feecard-Lcontent'>
                        <div className='rating-L'>
                        <h5>Rating</h5>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span  className="fa fa-star checked"></span>
                                <span  className="fa fa-star checked"></span>
                            </div>
                            <div className='availabilty-L'>
                                <h5>Availabilty</h5>
                                <p>Mon Wed Thu Sat</p>
                            </div>
                            <div className='time-L'>
                                <h5>Timing</h5>
                                <p> 09.00am To 18.00pm</p>
                            </div>
                        </div>
                        <div className='doc-fees'>
                        <h4>1000 Rs/-</h4>
                        <button>Book Appointment</button>
                    </div>
                    
                    </div>
                    <div className='feecard'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCs2ANA4xqJBKkXxXfZ8oCuc9RgZ8iGCktg&usqp=CAU' alt='doc-pic' />
                        <div className='feecard-Ucontent'>
                            <p>Name - Dr. Akhtar Aslam</p>
                            <p>Speciality - General Physician</p>
                            <p>Degree - M.D and M.S</p>
                            <p>Gender - Male</p>
                        </div>
                        <div className='feecard-Lcontent'>
                        <div className='rating-L'>
                        <h5>Rating</h5>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span  className="fa fa-star not-checked"></span>
                                <span  className="fa fa-star not-checked"></span>
                                <span  className="fa fa-star not-checked"></span>
                            </div>
                            <div className='availabilty-L'>
                                <h5>Availabilty</h5>
                                <p>Tue Wed Thu Fri</p>
                            </div>
                            <div className='time-L'>
                                <h5>Timing</h5>
                                <p> 11.00am To 16.00pm</p>
                            </div>
                        </div>
                        <div className='doc-fees'>
                        <h4>800 Rs/-</h4>
                        <button>Book Appointment</button>
                    </div>
                    
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Dcotorcard