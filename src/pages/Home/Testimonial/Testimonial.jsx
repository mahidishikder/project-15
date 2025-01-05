import ShareHeading from "../../../components/ShareHeading/ShareHeading"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@smastrom/react-rating/style.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
function Testimonial() {
  const [reviews,setReview] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setReview(data)
    })
  },[])
  return (
    <section className="my-24">
      <ShareHeading
      title={`TESTIMONIALS`}
      subTitle={`---What Our Clients Say---`}
      >



      </ShareHeading>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
          {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className="px-48 pb-6 text-center flex flex-col justify-center items-center">
            <Rating className=""
      style={{ maxWidth: 180 }}
      value={review.rating}
      
      isRequired
    /> 
    <p className="font-bold text-7xl">,,</p>
              <p className="text-lg font-medium text-gray-500 my-6">{review.details}</p>
              <h4 className="text-yellow-500 font-semibold text-3xl">{review.name}</h4>
            </div>
          </SwiperSlide>)
          }
        
     
      </Swiper>
    </section>

  )
}

export default Testimonial