import "./Servicess.css";
import { FaCode, FaPenFancy, FaMobileAlt, FaDesktop } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Servicess = () => {
  return (
    <div className="services relative" id="services">
      <div>
        <img
          className="absolute left-36 top-28"
          data-aos="zoom-in-down"
          src="https://i.ibb.co/D7B9JTn/bars12.png"
          alt=""
        />
      </div>
      <div className="max-w-screen-xl mx-auto py-24" data-aos="zoom-in-up">
        <div className="text-center pb-24">
          <h2 className="text-6xl banner-heading-sub">Services</h2>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            spaceBetween={70}
            className="mySwiper rounded-2xl"
          >
            <SwiperSlide className="rounded-2xl shadow-2xl">
              <div className="p-20 text-center services-content">
                <FaCode className="mx-auto text-9xl text-[#6815eb]" />
                <h3 className="text-3xl mt-5 mb-10">DESIGN + DEVELOPMENT</h3>
                <p className="text-slate-500 text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas tempore, quae ipsum at est quia deserunt. Accusantium
                  porro, fugiat !
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl shadow-2xl">
              <div className="p-20 text-center services-content">
                <FaPenFancy className="mx-auto text-9xl text-[#6815eb]" />
                <h3 className="text-3xl mt-5 mb-10">CONTENT + MANAGEMENT</h3>
                <p className="text-slate-500 text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas tempore, quae ipsum at est quia deserunt. Accusantium
                  porro, fugiat !
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl shadow-2xl">
              <div className="p-20 text-center services-content">
                <FaMobileAlt className="mx-auto text-9xl text-[#6815eb]" />
                <h3 className="text-3xl mt-5 mb-10">MOBILE + FRIENDLY</h3>
                <p className="text-slate-500 text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas tempore, quae ipsum at est quia deserunt. Accusantium
                  porro, fugiat !
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl shadow-2xl">
              <div className="p-20 text-center services-content">
                <FaDesktop className="mx-auto text-9xl text-[#6815eb]" />
                <h3 className="text-3xl mt-5 mb-10">ECOMMERCE</h3>
                <p className="text-slate-500 text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas tempore, quae ipsum at est quia deserunt. Accusantium
                  porro, fugiat !
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Servicess;
