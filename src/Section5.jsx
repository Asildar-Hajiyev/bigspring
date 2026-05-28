import { FaArrowRight } from "react-icons/fa6";

import slide1 from "./assets/service-slide-1.png";
import slide2 from "./assets/service-slide-2.png";
import slide3 from "./assets/service-slide-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import "swiper/css";
import "swiper/css/pagination";
function Section5() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4">
          <h2 className="font-semibold text-2xl sm:text-3xl">
            It’s a team of experienced and skilled people with distributions
          </h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            tristique eget amet, tempus eu at consecttur. Leo facilisi nunc
            viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing
            elit. Consequat tristique eget amet, tempus eu at consecttur. Leo
            facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <a href="#" className="flex items-center gap-1 text-[#00ABAA]">
            Check it out <FaArrowRight />
          </a>
        </div>
        <div className="w-full lg:w-[45%]">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <img src={slide1} alt="" className="w-full rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" className="w-full rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" className="w-full rounded-xl" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Section5;
