import React from 'react'
import './commSyms.css'

const CommSym = () => {
    return (
       <div className='Comcontianer'>
        <h2>Common Symptoms</h2>
        <p>Not Avoidable</p>
        <div className='com_main' data-aos='zoom-in' data-aos-duration='1000'>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Period-Issue-01.png' alt='comcard' />
                <p>Period issue</p>
            </div>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Acne-01.png' alt='comcard' />
                <p>Acne/Pimples</p>
            </div>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Fever-01.png' alt='comcard' />
                <p>Fever</p>
            </div>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Diabetes-01.png' alt='comcard' />
                <p>Diabetes</p>
            </div>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Cough-01.png' alt='comcard' />
                <p>Cough</p>
            </div>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Hairfall-01.png' alt='comcard' />
                <p>Hairfall</p>
            </div>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Weight-Loss-01.png' alt='comcard' />
                <p>Weight Loss</p>
            </div>
            <div className='comcard'>
                <img src='https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Depression-01.png' alt='comcard' />
                <p>Depression</p>
            </div>
        </div>
       </div>
    )
}

export default CommSym