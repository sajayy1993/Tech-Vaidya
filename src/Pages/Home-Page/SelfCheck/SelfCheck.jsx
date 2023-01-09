import React from 'react'
import './selfcheck.css'

const SelfCheck = () => {
  return (
    <div className='Selfcontianer'>
    <h2>Start a Self check</h2>
    <p>Analyse a few Symptoms. Know your health risks.</p>
    <div className='self_main'data-aos='zoom-in' data-aos-duration='1000' >
        <div className='selfcard'>
            <img src='https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-self-check-Migraine_2.png' alt='comcard' />
            <p>Migraine</p>
        </div>
        <div className='selfcard'>
            <img src='https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-Diabetes@2x-min.png' alt='comcard' />
            <p>Diabetes</p>
        </div>
        <div className='selfcard'>
            <img src='https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-Thyroid@2x-min.png' alt='comcard' />
            <p>Thyroid</p>
        </div>
        <div className='selfcard'>
            <img src='https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-Heart-Health@2x-min.png' alt='comcard' />
            <p>Heart Health</p>
        </div>
        <div className='selfcard'>
            <img src='https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-COVID@2x-min.png' alt='comcard' />
            <p>COVID-19</p>
        </div>
        <div className='selfcard'>
        <div className='cardHeading'>
        <h2>Know More</h2>
        </div>
           
        </div>
    </div>
   </div>
  )
}

export default SelfCheck