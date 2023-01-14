import React from 'react'
import './doctorsearch.css'
import SuperDoc from '../../../Assets/img/superDocc.png'
import Footer from '../../../Common/Footer/Footer'
import Navbar from '../../../Common/Navbar/Navbar'

const DoctorSearch = () => {
  return (
    <>

 <Navbar />
    <div className='section-container' >
      <div className='docsearch-main'>
        <input type='text' placeholder='Find Doctor.....' />
        <button>Search</button>
      </div>
      <div className='doc-head'>
        <h3>TOP CITIES</h3>
      </div>
      <div className='citi-container'>
        <div className='citi-card'>
          <p>Delhi</p>
        </div>
        <div className='citi-card'>
          <p>Noida</p>
        </div>
        <div className='citi-card'>
          <p>Gurugram</p>
        </div>
        <div className='citi-card'>
          <p>Mumbai</p>
        </div>
        <div className='citi-card'>
          <p>Lucknow</p>
        </div>
        <div className='citi-card'>
          <p>Chandigarh</p>
        </div>
        <div className='citi-card'>
          <p>More..</p>
        </div>
      </div>
      <div className='doctor-container'>
        <h2>TOP SPECILITIES</h2><hr />
        <div className='topspecard'>
          <div className='topspecard1'>
            <h4>Dermatology</h4>
            <img src='	https://prodaphstorage.blob.core.windows.net/specialties/ee249e8a-950a-489c-8a33-8846889831f5.jpg' alt='spec-logo' />
            <p>Specialists for skin and hair treatments </p>
            <h5>Rashes, Pimples, Acne, Hairfall, Dandruff</h5>
          </div>
          <div className='topspecard1'>
            <h4>General Physician/Internal Medicine</h4>
            <img src='	https://newassets.apollo247.com/specialties/ic_general_medicine.png' alt='spec-logo' />
            <p>Managing acute medical condition </p>
            <h5>typhoid, Abdominal Pain, Migraine, Infections</h5>
          </div>
          <div className='topspecard1'>
            <h4>Paediatrics</h4>
            <img src='	https://newassets.apollo247.com/specialties/ic_paediatrics.png' alt='spec-logo' />
            <p>Specialists to care and treat children </p>
            <h5>Constipation, Puberty, Nutrition, Autism</h5>
          </div>
          <div className='topspecard1'>
            <h4>Recommended Doctors</h4>
            <img src='	https://prodaphstorage.blob.core.windows.net/specialties/87734b2b-3a92-4ebe-97e7-f5a6d9554ef6.jpeg' alt='spec-logo' />
            <p>Top Reted Tech-Vaidya Doctors </p>
            <h5>Includes all specialties</h5>
          </div>
        </div>
        <h2>OTHER SPECILITIES...</h2>
        <div className='spelistcard'>
          <div className='left-container'>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/bdf0cf0d-754e-4254-aaf7-fdc7aedd7c35.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Allergist and Clinical Immunologist</h4>
                <p>Manage Allergies and treat immunity</p>
                <hr />
                <h5>Recurring Infections,immunity difficiency</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/91d337f3-0829-4461-bde3-cab78ed739a1.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Breast Surgery</h4>
                <p>For breast tissue removal</p>
                <hr />
                <h5>Breast tissue surgery & removal, Mastectomy</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/15a8e2a3-9e16-4f69-8606-a84093184073.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Cardiothoracic & Vascular Surgery</h4>
                <p>For surgical treat to thoracic organs</p>
                <hr />
                <h5>Heart & lung disease, Cardiac transplantation</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/62b70a73-837b-4b65-9b35-9b5ce04da79a.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Colorectal Surgery</h4>
                <p>For disorders of rectum, anus, and colon</p>
                <hr />
                <h5>Recurring Infections,immunity difficiency</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://newassets.apollo247.com/specialties/ic_Pain_Management.png' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Pain Management</h4>
                <p>For management of all types of pain</p>
                <hr />
                <h5>Acute pain, Chronic pain, Cancer pain</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='	https://newassets.apollo247.com/specialties/ic_Critical_Care.png' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Critical Care</h4>
                <p>For life-threatening conditions</p>
                <hr />
                <h5>ICU related, High-risk patients, Hypertension</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/9958ce34-1490-42da-a76d-f5304b873104.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Endocrine Surgery</h4>
                <p>For surgeries of endocrine glands</p>
                <hr />
                <h5>Thyroid cancer, Adrenal gland tumours, Conn syndrome</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='	https://prodaphstorage.blob.core.windows.net/specialties/a9edf65e-a8f9-47e9-898c-524420254180.png' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Gynecologic Surgery</h4>
                <p>For surgeries on female reproductive system</p>
                <hr />
                <h5>Ovarian cysts</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='	https://prodaphstorage.blob.core.windows.net/specialties/4466dab4-c2b4-4961-b34e-c87673b1e9cd.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>General & Laparoscopic Surgeon</h4>
                <p>For general and minimally invasive surgeries</p>
                <hr />
                <h5>Cysts, Tumors, Appendicitis, Keyhole Surgery</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://newassets.apollo247.com/specialties/ic_OMSurgery.png' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Oral & Maxillofacial Surgery</h4>
                <p>For reconstructive surgery of oral cavity, face, jaws</p>
                <hr />
                <h5>Teeth Removal, Cleft Lip, Cancer of neck, Jaw</h5>
              </div>
            </div>
          </div>
          <div className='right-container'>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/e5a03790-7cef-4f9c-909c-e45b658a5a6d.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Cold, Cough and Fever</h4>
                <p>For common health concerns</p>
                <hr />
                <h5>Fever, Eye Infection, Stomach Ache, Headache</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/244b0282-e14c-42f0-af6e-613bd8af6934.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Physiotherapy and Rehabilitation</h4>
                <p>For facilitating recovery from illness/injuries</p>
                <hr />
                <h5>Post-Covid, Recovery from surgeries</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='	https://prodaphstorage.blob.core.windows.net/specialties/a7140a26-4955-4c50-bb6a-3299b8de886c.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Psychology</h4>
                <p>Therapists for helping in mental health issue</p>
                <hr />
                <h5>Phobias, Family and Personal Counselling</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://newassets.apollo247.com/specialties/ic_orthopaedics.png' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Orthopaedics</h4>
                <p>Managing issues of bones, joints, knees</p>
                <hr />
                <h5>Knee Pain, Shoulder Pain, Bone deformity</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='	https://prodaphstorage.blob.core.windows.net/specialties/c188f977-89d2-427c-8142-f67a47138462.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Nuclear Medicine Physician</h4>
                <p>Using radioactive materials to treat issues</p>
                <hr />
                <h5>Scans- Breast, Brain, Bone, Thyroid, Kidney</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/bb67daa7-5449-4987-b185-c907b19128c8.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Sleep Medicine</h4>
                <p>Diagnosis & treatment of sleep disorders</p>
                <hr />
                <h5>Insomnia, Constant Fatigue, Snoring</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/bfac9eaf-e1c1-4a64-b10a-e5b33ed1567c.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Spine Surgery</h4>
                <p>For Surgery of the spine, Neck and Back Bone pain </p>
                <hr />
                <h5>Back Pain, Neck Pain</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://newassets.apollo247.com/specialties/ic_urology.png' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Urology</h4>
                <p>For disorders of urinary tract and male reproductive organs</p>
                <hr />
                <h5>Urinary infection, Kidney stones, Traumatic injury</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='	https://prodaphstorage.blob.core.windows.net/specialties/04eca688-50f4-4f2c-8420-261619cb5e33.png' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>ENT, Head & Neck Surgery</h4>
                <p>Advance care For ENT Related cancer Head & Neck</p>
                <hr />
                <h5>BAD ENT,Mouth Ulcer,Neck Oncology,Head Oncolo</h5>
              </div>
            </div>
            <div className='specard'>
              <div className='specardImg'>
                <img src='https://prodaphstorage.blob.core.windows.net/specialties/f752370c-67cc-4c2b-9387-3529f3e34ac5.jpg' alt='' />
              </div>
              <div className='specardcontent'>
                <h4>Speech Therapy</h4>
                <p>Treatment of speech disorders</p>
                <hr />
                <h5>Stuttering, Repeating sound, Elongating words</h5>
              </div>
            </div>

          </div>
          </div>

      </div>
      <div className='bootom-content'>
        <div className='btm-card'>
         <img src='	https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/h/e/health_devices_web_1.jpg' alt='btm-cardLogo'/>
         <div className='shop-container'>
         <h4>Shopping with <span className='shop-tech'>Tech-Vaidya</span></h4>
         <button>Order Now</button>
         </div>
         <div className='btm-img'>
         <img  src={SuperDoc} alt='shop-logo'/>
         </div>
       
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default DoctorSearch