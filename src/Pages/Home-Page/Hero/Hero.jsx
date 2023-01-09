import React from 'react'
import SuperDoc from '../../../Assets/img/superDocc.png'
import './hero.css'
 
const Hero = () => {
  return (
    <div className='Section_hero'>
    <div className='Subcontainer '>
      <div className='sick_top'>
        <h2 className='section_title'> Feeling not well !</h2>
        <div className='subsection_title'>
        <h3>Not to Worry <span className='sb_titlespan'>Tech-vaidya </span> is HERE </h3>
        <div className='Supdoc'data-aos='zoom-in' data-aos-duration='1000'>
        <img src={SuperDoc} className='subDoc_img' alt='subSection_Doc'/>
        </div>
     </div>
       </div>
    </div>
        
    </div>
  )
}

export default Hero