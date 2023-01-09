import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './testimonial.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";


const Testimonial = () => {
  return (
    <div className='test-section'>
      <h2>Testimonials</h2>
      <div className='test-SubSection'>
      <Swiper
       spaceBetween={30}
      autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay, ]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="test-slideContent">
          <div className="test-img">
            <img src="https://www.pngitem.com/pimgs/m/215-2155194_dentistry-from-the-heart-beautiful-smile-girl-with.png" alt="test-logo" />
          </div>
          <div className="test-content">
            <p>Dr. Meena is an excellent dentist. 
            She took the time to explain every procedure she was doing. 
            For example, when I got my teeth whitened, Dr. Meena was very supportive, and thorough when explaining the process. 
            She is a professional and has a naturally lovely personality. I would recommend Dr. Meena to everyone. 
            She is the best dentist I have ever had.</p>
            <span className="test-name">Harshita Marchent</span>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>     <div className="test-slideContent">
          <div className="test-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSut77DX44bjU9gDwekR_MTkca8cc8LDmdVmQ&usqp=CAU" alt="test-logo" />
          </div>
          <div className="test-content">
            <p>We had a very pleasant experience with Dr.
             Meena and her staff. My daughter was very anxious about the appointment and any procedure, but Dr. Meena was very patient with her and spend a lot of time trying to calm her down, the staff was very helpful and kind and always available to help. 
             Dr. Sakshi is very professional, she takes the time to explain what needs to be done and provides valuable advice , It's not easy to find a good dentist for your kids, I highly recommend Dr. Meena and her staff for kids and adults..</p>
            <span className="test-name">Swati Kaushik</span>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>     <div className="test-slideContent">
          <div className="test-img">
            <img src="https://thumbs.dreamstime.com/b/portrait-cheerful-indian-senior-old-man-pointing-presenting-hands-folded-pose-retired-wears-white-kurta-195341754.jpg" alt="test-logo" />
          </div>
          <div className="test-content">
            <p>Dr. Kulkarni is so knowledgeable and he shares your test results in detail. He has great bed side manners and communication. 
            I am so glad I listened to my husband and made the appointment. 
            I was on so much pain and my appointment wasn't for another 2 weeks and Dr. Kahn squeezed me into his schedule, that is what I call patient cenrered value based care.</p>
            <span className="test-name">Harshita Marchent</span>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>     <div className="test-slideContent">
          <div className="test-img">
            <img src="https://as1.ftcdn.net/v2/jpg/01/97/60/92/1000_F_197609227_MRlfcLtVKeSO4cgcUKZmZMghUZKKE9fR.jpg" alt="test-logo" />
          </div>
          <div className="test-content">
            <p>Dr. Meena is an excellent dentist. 
            She took the time to explain every procedure she was doing. 
            For example, when I got my teeth whitened, Dr. Meena was very supportive, and thorough when explaining the process. 
            She is a professional and has a naturally lovely personality. I would recommend Dr. Meena to everyone. 
            She is the best dentist I have ever had.</p>
            <span className="test-name">Harshita Marchent</span>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>     <div className="test-slideContent">
          <div className="test-img">
            <img src="https://www.pngitem.com/pimgs/m/215-2155194_dentistry-from-the-heart-beautiful-smile-girl-with.png" alt="test-logo" />
          </div>
          <div className="test-content">
            <p>Dr. Meena is an excellent dentist. 
            She took the time to explain every procedure she was doing. 
            For example, when I got my teeth whitened, Dr. Meena was very supportive, and thorough when explaining the process. 
            She is a professional and has a naturally lovely personality. I would recommend Dr. Meena to everyone. 
            She is the best dentist I have ever had.</p>
            <span className="test-name">Harshita Marchent</span>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>     <div className="test-slideContent">
          <div className="test-img">
            <img src="https://www.pngitem.com/pimgs/m/215-2155194_dentistry-from-the-heart-beautiful-smile-girl-with.png" alt="test-logo" />
          </div>
          <div className="test-content">
            <p>Dr. Meena is an excellent dentist. 
            She took the time to explain every procedure she was doing. 
            For example, when I got my teeth whitened, Dr. Meena was very supportive, and thorough when explaining the process. 
            She is a professional and has a naturally lovely personality. I would recommend Dr. Meena to everyone. 
            She is the best dentist I have ever had.</p>
            <span className="test-name">Harshita Marchent</span>
          </div>
        </div></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonial