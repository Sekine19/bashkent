import React from 'react';
import app_logo from '../bashkent-image/design/rotate.png'
import Layout from './Layout';

export const AppContact = () => {
  return (
    <Layout>
      <div className='app-contact'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6 col-border">
              <div className="section-title">
                <h3>Əlaqə</h3>
                <img src={app_logo} alt="" />
              </div>
              <form action="">
                <input type="text" placeholder='Adınız *' />
                <input type="text" placeholder='Soyadınız *' />
                <input type="email" placeholder='Email *' />
                <input type="number" placeholder='Nömrə *' />
                <input type="text" placeholder='Başlıq *' />
                <textarea placeholder='Mesajınız' ></textarea>
                <button>Göndər</button>
              </form>
            </div>
            <div className="col-12 col-xl-6">
              <div className="map">
                <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1UQoB2Xo9DSiKrUx5V290Dxzny7WCIB0&ehbc=2E312F" frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
