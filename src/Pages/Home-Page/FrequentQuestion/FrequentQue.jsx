import React, { useState } from 'react'
import './frequesnque.css'

const FrequentQue = () => {

    const [show1, setShow1]=useState(false)
    const [show2, setShow2]=useState(false)
    const [show3, setShow3]=useState(false)
    const [show4, setShow4]=useState(false)
    const [show5, setShow5]=useState(false)

  return (
    <div className='frequent-section'>
    <h2>Frequently asked questions</h2>
    <div className='freque-card' >


    <div className='frequent-main' data-aos='fade-left' data-aos-duration='300'>
        <div className='freQues-line'>
        <h3>What is TechVaidya Self-Check ?</h3>
        <div className='que-btn'>
        <button onClick={()=>setShow1(!show1)}> → </button>
        </div>
        </div>
        <div className='ques-content'>
        {
            show1 ? <p> An Tech-vaidya Self-Check is a free & secure health assessment tool.
            It helps you understand if your, or a family member’s, recent symptoms pose a health risk.
             The Tech-Vaidya Self-Check is created & certified by doctors. Navi, MFine’s Assistant, will be by your side throughout the journey.</p>: null
         }
       
      
        </div>
    </div>
    <div className='frequent-main' data-aos='fade-left' data-aos-duration='500'>
        <div className='freQues-line'>
        <h3>How to take a Self-Check ?</h3>
        <div className='que-btn'>
        <button onClick={()=>setShow2(!show2)}> → </button>
        </div>
      
        </div>
        <div className='ques-content'>
        {
            show2 ? <p> Click on the Start button & answer the questions to the best of your ability. 
            Click the Submit button. Find out your risk level with an in-depth report. Follow the advice for improving certain parts of your lifestyle and keep an eye out for the mentioned signs.</p>: null
         }
       
      
        </div>
    </div>
    <div className='frequent-main' data-aos='fade-left' data-aos-duration='700'>
        <div className='freQues-line'>
        <h3>is Tech-vaidya Self-Check secure ?</h3>
        <div className='que-btn'>
        <button onClick={()=>setShow3(!show3)}> → </button>
        </div>
        </div>
        <div className='ques-content'>
        {
            show3 ? <p> Definitely! Tech-Vaidya Self-Checks are anonymous and reliable. None of your personal data is stored with us. The questions, answers, reports, advice, and signs are all verified by doctors. It’s free and secure for anyone to use.</p>: null
         }
       
      
        </div>
    </div>
    <div className='frequent-main' data-aos='fade-left' data-aos-duration='900'>
        <div className='freQues-line'>
        <h3>How do I consult a doctor after a Self-Check ?</h3>
        <div className='que-btn'>
        <button onClick={()=>setShow4(!show4)}> → </button>
        </div>
        </div>
        <div className='ques-content'>
        {
            show4 ? <p> You can click on See a Doctor when you land on the report page after a Self-Check. Talk to the relevant medical expert of your choice.
             You can even click on Consult Now on the home page & book an appointment.</p>: null
         }
       
      
        </div>
    </div>
    <div className='frequent-main' data-aos='fade-left' data-aos-duration='1100'>
        <div className='freQues-line'>
        <h3>How can I share an Tech-Vaidya self-check witth family and friends ?</h3>
        <div className='que-btn'>
        <button onClick={()=>setShow5(!show5)}> → </button>
        </div>
        </div>
        <div className='ques-content'>
        {
            show5 ? <p> Click on the Share button for the specific Self-Check you want to share with a loved one from the MFine Self-Check Page.
             You will be able to share it with them on various platforms. You can also share a specific Self-Check, which you undertook, from its report page as well.</p>: null
         }
       
      
        </div>
    </div>
    </div>
    </div>
  )
}


export default FrequentQue