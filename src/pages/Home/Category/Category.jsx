import Img1 from '../../../assets/home/slide1.jpg';
import Img2 from '../../../assets/home/slide2.jpg';
import Img3 from '../../../assets/home/slide3.jpg';
import Img4 from '../../../assets/home/slide4.jpg';
import Img5 from '../../../assets/home/slide5.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ShareHeading from '../../../components/ShareHeading/ShareHeading';

function Category() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <ShareHeading
        subTitle={`---From 11:00am to 10:00pm---`}
        title={`ORDER ONLINE`}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <img
            className="w-full max-w-[312px] mx-auto rounded-lg shadow-lg"
            src={Img1}
            alt="Salads"
          />
          <p className="text-lg md:text-xl lg:text-2xl text-center font-medium text-white/70 -mt-6">
            SALADS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-w-[312px] mx-auto rounded-lg shadow-lg"
            src={Img2}
            alt="Soups"
          />
          <p className="text-lg md:text-xl lg:text-2xl text-center font-medium text-white/70 -mt-6">
            SOUPS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-w-[312px] mx-auto rounded-lg shadow-lg"
            src={Img3}
            alt="Pizzas"
          />
          <p className="text-lg md:text-xl lg:text-2xl text-center font-medium text-white/70 -mt-6">
            PIZZAS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-w-[312px] mx-auto rounded-lg shadow-lg"
            src={Img4}
            alt="Desserts"
          />
          <p className="text-lg md:text-xl lg:text-2xl text-center font-medium text-white/70 -mt-6">
            DESSERTS
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Category;
