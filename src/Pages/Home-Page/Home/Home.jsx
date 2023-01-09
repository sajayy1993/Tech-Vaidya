import React from 'react'
import './home.css'
import hero_pic from '../../../Assets/img/tech-vaidya.png'
import Hero from '../Hero/Hero'
import TopSerched from '../Top_Searched/TopSerched'
import CommSym from '../CommonSymptoms/CommSym'
import SelfCheck from '../SelfCheck/SelfCheck'
import Yoga from '../Yoga/Yoga'
import Testimonial from '../Testimonial/Testimonial'
import FrequentQue from '../FrequentQuestion/FrequentQue'
const Home = () => {
    return (
        <>
        <div className='Section'>
            <div className='container'>
                <div className='hero_wrapper'>
                    <div className='hero_content'>
                        <h2 className='hero-heding' data-aos='zoom-in' data-aos-duration='1500'>Tech-Vaidya is care for you and your family.</h2>
                        <h2 className='subhero-heding'>Our Priority your <span className='helath-head'>Health</span></h2>
                        <div className='hero_btn'>
                            <button className='booking_appointment'>Book Appointment</button>
                        </div>
                    </div>
                    <div className='hero_img'>
                        <div className='hero_img-wrapper'>
                            <div className='box-01'>
                                <div className='box-02'>
                                    <div className='box-03'>
                                        <div className='box-img' data-aos='fade-left' data-aos-duration='1500'>
                                            <img src={hero_pic} alt='hero' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='heart_rate'data-aos='fade-down' data-aos-duration='1500'>
                                <h5>Heart Health</h5>
                                <span>
                                <i class="ri-run-fill"></i>
                                </span>
                            </div>
                            <div className='doctor_location'data-aos='fade-up' data-aos-duration='1500'>
                                <h5>Ask with Expert</h5>
                                <span>
                                <i class="ri-team-fill"></i>
                                </span>
                            </div>
                            <div className='online_chat'data-aos='fade-left' data-aos-duration='1500'>
                            <h5>Online Consultation</h5>
                            <span><i class="ri-vidicon-2-fill"></i></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Hero />
        <TopSerched />
        <CommSym />
     <SelfCheck />
     <Yoga />
     <Testimonial />
     <FrequentQue />
</>
    )
}

export default Home
