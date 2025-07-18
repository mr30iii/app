import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="relative w-full h-[80vh] sm:h-screen">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="/1.jpg"
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/2.jpg"
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/3.jpg"
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="absolute bottom-10 sm:bottom-20 w-full text-center text-white z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-xl sm:text-4xl font-bold leading-tight">
          ABDULLAH Technical
        </h1>
        <p className="text-sm sm:text-base mt-2">
          Please Like, Share & Subscribe
        </p>
      </motion.div>
    </div>
  );
};

export default HomePage;
