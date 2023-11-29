import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import { bannerImages } from '../../data/BannerData';

function BannerSwiper() {
    return (
        <div className='banner-swiper'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="swiper"
            >
                {
                    bannerImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='image'>
                                <img src={image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default BannerSwiper