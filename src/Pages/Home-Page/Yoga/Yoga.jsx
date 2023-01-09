import React from 'react'
import './yoga.css'

const Yoga = () => {
  return (
    <div className='yogasection'>
    <div className='yogacontainer'>
        <div className='yoga_warpper'>
            <div className='yoga_img'>
            
                {/* <img src='https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss-1600x900.jpg' alt='yogaimg'/> */}
                   <img src='https://cdni.iconscout.com/illustration/premium/thumb/yoga-pose-3488545-2922399.png' alt='yogaimg'/>
            </div>
            <div className='yoga_content'>
                <h2 className='yoga_title'>
                    Get the <span className='yoga_span'> YOGA</span> tips here 
                </h2>
                <p>It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. 
                The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body. 
                Don’t be intimidated by yoga terminology, fancy yoga studios and complicated poses. Yoga is for everyone.</p>
                <button className='yoga_btn'>Get Started</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Yoga