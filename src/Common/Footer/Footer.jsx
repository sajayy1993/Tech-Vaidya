import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer-section'>
    <div className='footer-container'>
    <div className='footer-Content'>
        <h2>Tech-Vaidya</h2>
        <div className='footer-icon'>
        <i class="ri-instagram-line"></i>
        <i class="ri-twitter-line"></i>
        <i class="ri-facebook-box-fill"></i>
        <i class="ri-whatsapp-line"></i>
        </div>
        <h4>Contact Us - 07217692329</h4>
    </div>
        <div className='footer-list'>
            <h3>T-vaidya</h3>
            <ul>
                <li>About</li>
                <li>Carrers</li>
                <li>Press</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Term of Use</li>
            </ul>
        </div>
        <div className='footer-list'>
            <h3>Services</h3>
            <ul>
                <li>Consultation</li>
                <li>Lab Test</li>
                <li>Health Packages</li>
                <li>Scan & X-rays</li>
                <li>Surgeries</li>
                <li>Long Terms care</li>
              
                
            </ul>
        </div>
        <div className='footer-list'>
            <h3>Insurance Carriers</h3>
            <ul>
                <li>Aditya Birla Health Insurance.</li>
                <li>Bajaj Allianz Health Insurance.</li>
                <li>Bharti AXA Health Insurance</li>
                <li>Life Insurance Corporation of India.</li>
                <li>Edelweiss Health Insurance.</li>
                <li>Future Generali Health Insurance.</li>
                
            </ul>
        </div>
    </div>
      
    </div>
    <span className='footer-copy'>Copyright 2023 @ Ajay Yadav. All rights are reserved.</span> 
    </>
  )
}

export default Footer