import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { branchDatas } from '../../data/BranchData';
import place_img from '../../bashkent-image/design/rotate.png';
import { Link } from 'react-router-dom';

export const Place = () => {

    return (
        <section>
            <div className="container">
                <div className="section-title">
                    <h3>Filiallar</h3>
                    <img src={place_img} alt="" />
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        branchDatas.map((fluid) => (
                            <SwiperSlide key={fluid.id}>
                                <Link to={`/place/${fluid.title}`} className="filial-card">
                                        <div className="filial-image">
                                            <img src={fluid.image} alt="" />
                                        </div>
                                        <div className="filial-name">
                                            <span>{fluid.title}</span>
                                        </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
