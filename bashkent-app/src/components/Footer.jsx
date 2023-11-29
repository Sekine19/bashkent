import React from 'react'
import logo from '../bashkent-image/logo/logo.png'

export const Footer = () => {
    return (
        <footer className='app-footer'>
            <div className="container">
                <div className="row">
                    <div className="logo-col col-12 col-xxl-3">
                        <div className="inner">
                            <a className='logo' href="">
                                <img src={logo} alt="" />
                            </a>
                            <div className="sosial-icons">
                                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                                <a href=""><i className="fa-brands fa-tiktok"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href=""><i className="fa-brands fa-youtube"></i></a>
                                <a href=""><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        <div className="footer-links">
                            <h2>Menyular</h2>
                            <a href="/">Əsas Səhifə</a>
                            <a href="/about">Haqqımızda</a>
                            <a href="/place">Filiallar</a>
                            <a href="/food">Yeməklər</a>
                            <a href="/gallery">Qalereya</a>
                            <a href="/menu">Menyu</a>
                            <a href="/comment">Rəylər</a>
                            <a href="/contact">Əlaqə</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        <div className="footer-links">
                            <h2>Faydalı linklər</h2>
                            <a href="">Tez-tez soruşulanlar</a>
                            <a href="">Vakansiya</a>
                            <a href="">Xidmət şəbəkəsi</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        <div className="footer-links">
                            <h2>Ünvan</h2>
                            <a href="">
                                <i className="fa-solid fa-location-dot"></i>
                                Azərbaycan, Bakı ş., Əhməd Rəcəbli
                            </a>
                            <a href="">
                                <i className="fa-solid fa-phone"></i>
                                0554501102
                            </a>
                            <a href="">
                                <i className="fa-solid fa-envelope"></i>
                                bashkentrestoran@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="text">
                        ©
                        2023
                        | Bütün hüquqlar qorunur.
                    </div>
                </div>
            </div>
        </footer>
    )
}
