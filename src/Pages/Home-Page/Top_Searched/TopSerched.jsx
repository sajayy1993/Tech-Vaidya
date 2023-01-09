import React from 'react'
import './topserached.css'

const TopSerched = () => {
  return (
    <div className='top-container'>
    <h2>Top Searched</h2>
    <p>30+ Specialities</p>
    <div className='topSearch_main'>
        <div className='card_conatner'data-aos='flip-right' data-aos-duration='1000'>
            <div className='card_img'>
                <img src='https://knoxvillecenterfordermatologyandplasticsurgery.com/wp-content/uploads/2021/04/dermatology-appointment.jpeg' alt='cardlogo'/>
            </div>
            <h3>Dermatologist</h3>
        </div>
        <div className='card_conatner'data-aos='flip-right' data-aos-duration='1000'>
            <div className='card_img'>
                <img src='https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/01Physician.jpeg' alt='cardlogo'/>
            </div>
            <h3>Physician</h3>
        </div>
        <div className='card_conatner'data-aos='flip-right' data-aos-duration='1000'>
            <div className='card_img'>
                <img src='https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/02Womens-Health.jpeg' alt='cardlogo'/>
            </div>
            <h3>Gynaecologist</h3>
        </div>
        <div className='card_conatner'data-aos='flip-right' data-aos-duration='1000'>
            <div className='card_img'>
                <img src='https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/03Skin-Hair-Specialist.jpeg' alt='cardlogo'/>
            </div>
            <h3>Skin/Hair Specialist</h3>
        </div>
        <div className='card_conatner'data-aos='flip-right' data-aos-duration='1000'>
            <div className='card_img'>
                <img src='https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/Pediatrician.jpg' alt='cardlogo'/>
            </div>
            <h3>Child Specialist</h3>
        </div>
        <div className='card_conatner'data-aos='flip-right' data-aos-duration='1000'>
            <div className='card_img'>
                <img src='https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/05Orthopedician.jpeg' alt='cardlogo'/>
            </div>
            <h3>Orthopadiction</h3>
        </div>
        <div className='card_conatner'data-aos='flip-right' data-aos-duration='1000'>
            <div className='card_img'>
                <img src='https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/08Dietitian.jpeg' alt='cardlogo'/>
            </div>
            <h3>Dietition</h3>
        </div>
    </div>
    </div>
  )
}

export default TopSerched