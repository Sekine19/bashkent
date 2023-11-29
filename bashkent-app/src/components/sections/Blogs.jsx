import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { blogsDatas } from '../../data/BlogsData';
import blogs_img from '../../bashkent-image/design/rotate.png';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export const Blogs = () => {
    return (
            <section className='blogs'>
                <div className="container">
                    <div className="section-title">
                        <h3>Bloglar</h3>
                        <img src={blogs_img} alt="" />
                    </div>
                    <div className='blogs-swiper'>
                        <Swiper
                            slidesPerView={3}
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
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                blogsDatas.map((cards) => (
                                    <SwiperSlide key={cards.id}>
                                        <div className="blog-card">
                                            <div className="blog-image">
                                                <img src={cards.image} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className='title'>
                                                    {cards.title}
                                                </h5>
                                                <div className="text">
                                                    <p>{cards.text.length > 100 ? cards.text.slice(0, 120) + '...' : cards.text}</p>
                                                </div>
                                                <Link to={`/blogs/${cards.title}`} className='btn'>
                                                    Ətraflı<i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                                <div className="date">
                                                    <span>{cards.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
    )
}
