import React from 'react';
import { Comment } from './sections/Comment';
import comment_logo from '../bashkent-image/design/rotate.png';
import { commentImages } from '../data/BannerData';
import Layout from './Layout';

export const CommentStar = ({ value }) => {
  const showStar = (value) => {
    let stars = [];
    let fillStar = <i className="fa-solid fa-star"></i>;
    let emptyStar = <i className="fa-regular fa-star"></i>

    for (let i = 1; i <= 5; i++) {
      if (i <= value) {
        stars.push(fillStar);
      } else {
        stars.push(emptyStar);
      }
    }
    return stars;
  }
  return (
    <div className='comment-stars'>{showStar(value)}</div>
  )
}

export const AppComment = () => {
  return (
    <Layout>
      <div className='app-comment'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6">
              {
                commentImages.map((comment) => (
                  <div key={comment.id} className="cards">
                    <div className="user">
                      <div className="user-img">
                        <img src={comment.image} alt="" />
                      </div>
                      <div className="user-star">
                        <CommentStar value={comment.star} />
                      </div>
                    </div>
                    <div className="comment">
                      <p>{comment.text}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="col-12 col-xl-6 col-border">
              <div className="section-title">
                <h3>Rəy yazın</h3>
                <img src={comment_logo} alt="" />
              </div>
              <form action="">
                <input type="text" placeholder='Adınız *' />
                <input type="email" placeholder='Email *' />
                <select>
                  <option disabled>Filialı seçin</option>
                  <option value="Başkent">Başkent Nərimanov</option>
                  <option value="Başkent 28 May">Başkent 28 May</option>
                  <option value="Başkent Memar Əcəmi">Başkent Memar Əcəmi</option>
                  <option value="Başkent Yasamal">Başkent Yasamal</option>
                </select>
                <textarea placeholder='Rəyiniz'></textarea>
                <button>Göndər</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
