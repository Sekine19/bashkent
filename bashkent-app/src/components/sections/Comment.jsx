import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { commentImages } from '../../data/BannerData';
import place_img from '../../bashkent-image/design/rotate.png'

export const CommentStar = ({value}) => {
    const showStar = (value) => {
        let stars = [];
        let fillStar = <i className="fa-solid fa-star"></i>;
        let emptyStar = <i className="fa-regular fa-star"></i>
        
        for(let i = 1; i <= 5; i++){
            if(i <= value){
                stars.push(fillStar);
            }else{
                stars.push(emptyStar);
            }
        }
        return stars;
    }
    return (
        <div className='comment-stars'>{showStar(value)}</div>
    )
}

export const Comment = () => {
    return (
        <section className='comment-card'>
            <div className="container">
                <div className="section-title">
                    <h3>Müştəri Rəyləri</h3>
                    <img src={place_img} alt="" />
                </div>
                <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="swiper"
            >
                    {
                        commentImages.map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <div className="cards">
                                    <div className="user">
                                        <div className="user-img">
                                            <img src={comment.image} alt="" />
                                        </div>
                                        <div className="user-star">
                                        <CommentStar value={comment.star}/>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <p>{comment.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
