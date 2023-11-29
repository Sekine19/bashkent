import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { partnersImages } from '../../data/PartnersData';
export const Partners = () => {
    return (
        <div className="partner">
            <div className='container'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1285: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        partnersImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="partners">
                                    <div className="partners-image">
                                        <img src={image} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
