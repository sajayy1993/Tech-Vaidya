import React from 'react'
import Footer from '../../../Common/Footer/Footer'
import Navbar from '../../../Common/Navbar/Navbar'
import './docprofile.css'

const Docprofile = () => {
  return (
    <>
    <Navbar />
    <div className='docpro-container'>
      <div className='docpro-main'>
        <p>Doctor's Profile</p>
        <div className='box-page'>
          <div className='docpro-personal-content'>
            <div className='profile-content'>
              <div className='pro-name'>
                <div className='doctor-namepro'>
                  <span className='nameborder'>Name</span>
                  <span>Specilities</span>
                  <span>Experience</span>
                  <span>Education</span>
                  <span>Location</span>
                </div>

              </div>
              <div className='pro-namecontent'>
                <div className='doctor-name'>
                  <span>Ankur Yadav</span>
                  <span>Orthopedics</span>
                  <span>3Year's </span>
                  <span>M.B.B.S, M.S <i class="ri-user-settings-fill"></i> </span>
                  <span>R.M.L hospital New Delhi <i class="ri-map-pin-line"></i></span>
                </div>

              </div>
            </div>
            <div className='profile-img'>
              <img src='https://previews.123rf.com/images/karelnoppe/karelnoppe1408/karelnoppe140800011/30606941-close-up-portrait-of-young-male-doctor-isolated-on-white-background-.jpg' alt='doc-profile-img' />
              <div className='profile-btn'>
                <button><i class="ri-vidicon-2-fill"></i>Book Vedio Consult</button>
                <button><i class="ri-hospital-fill"></i>Book visit in Hospital</button>
              </div>
            </div>
          </div>
          <div className='regis-lang'>
            <img src='https://cdn-icons-png.flaticon.com/512/2231/2231430.png' alt='pro-lang' />
            <div className='docpro-regis'>
              <h4>Registration No</h4>
              <p>125864955</p>
            </div>
            <div className='docpro-lang'>
              <h4>Language</h4>
              <p>English, Hindi, Gujrati</p>
            </div>
          </div>
          <div className='docpro-about'>
            <h3>About Dr. Ankur Yadav</h3>
            <div className='about-content'>
              <p>Compassionate orthopaedic surgeon with nine years of experience providing superior patient care.
                Committed professional who fully adheres to the highest standards when performing surgery.
                Extensive knowledge of musculoskeletal deformities, diseases, and injuries. Ability to provide patients with outstanding physical and emotional support during diagnosis, treatment, and recovery stages.
                Passionate medical professional with superior verbal and written communication skills and a pleasant bedside manner.</p>
            </div>
          </div>
          <div className='doc-awards'>
            <h4>Awards</h4>
            <li>- 1st Prize in Physiology in the Nandita Behera Memorial Award-2000 </li>
            <li>- 1st Prize in Oral Paper Presentation in the East Zone Pediatric Conference, Imphal-2008</li>
            <li>- 2nd Prize in Acute Leukemia Quiz: International Leukemia meet, 2014, Cancer Institute Chennai</li>
          </div>
          <div className='doc-services'>
            <h4>Services</h4>
            <li>- Radiation Therapy</li>
            <li>- Chemotherapy of Solid Tumors</li>
            <li>- Chemotherapy of Haematological Malignancies</li>
            <li>- Giant Cell Tumour Treatment</li>
            <li>- Hormone Therapy For Breast Cancer</li>
            <li>- Osteosarcoma Treatment</li>
            <li>- Hormone Therapy For Prostate Cancer</li>
            <li>- Ewing's Sarcoma Treatment</li>
            <li>- PICC Line Insertion</li>
            <li>- Immunotherapy</li>
            <li>- Targeted Therapy</li>
            <li>- Adult/Pediatric Hematolymphoid Malignancy and BMT</li>
            <li>- Cancer Screening (Breast, Colon, Cervix, Lung, Head and Neck Malignancy)</li>
            <li>- Treatment of Gastrointestinal Cancer (Colon,GIST,NET) </li>

          </div>
          <div className='timings'>
            <h3>Timings</h3>
            <div className='docpro-timing'>
              <div className='online-timing'>
                <h4>Online</h4>
                <div className='Doc-day'>
                  <li>MON </li>
                  <li>TUE </li>
                  <li>WED </li>
                  <li>THU </li>
                  <li>FRI </li>
                  <li>SAT </li>
                  <li>SUN </li>
                </div>
                <div className='doc-times'>
                  <li> 11:30 AM - 05:00 PM</li>
                  <li> 11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>(Available in special cases)</li>

                </div>


              </div>  <div className='online-timing'>
                <h4>Clinic</h4>
                <div className='Doc-day'>
                  <li>MON </li>
                  <li>TUE </li>
                  <li>WED </li>
                  <li>THU </li>
                  <li>FRI </li>
                  <li>SAT </li>
                  <li>SUN </li>
                </div>
                <div className='doc-times'>
                  <li> 11:30 AM - 05:00 PM</li>
                  <li> 11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>11:30 AM - 05:00 PM</li>
                  <li>(Available in special cases)</li>

                </div>


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

export default Docprofile 