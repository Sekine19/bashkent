import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import logo from '../../bashkent-image/logo/logo.png';
import { Link } from 'react-router-dom';
import { navLinks } from './HeaderNav';

function MenuOffcanvas({ showMenu, toggleMenu }) {
    return (
        <>
            <Offcanvas className='menu-canvas' show={showMenu} onHide={toggleMenu} placement='start'>
                <OffcanvasHeader className='menu-canvas-header'>
                    <a href=""><img src={logo} alt="" /></a>
                    <button className="btn-close" onClick={() => toggleMenu()}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </OffcanvasHeader>
                <OffcanvasBody className='menu-canvas-body'>
                    <div className='mobile-menu'>
                        <div className="links">
                            {
                                navLinks.map(link => (
                                    <Link key={link.id} to={link.slug}>{link.name}</Link>
                                ))
                            }
                            {/* <a href="/">Əsas səhifə</a>
                            <a href="/about">Haqqımızda</a>
                            <a href="/place">Filiallar</a>
                            <a href="/food">Yeməklər</a>
                            <a href="/gallery">Qalareya</a>
                            <a href="/menu">Menyu</a>
                            <a href="/comment">Rəylər</a>
                            <a href="/contact">Əlaqə</a> */}
                            <a className='border' href="">Rezervasiya</a>
                        </div>
                        <div className="sosial-icons">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}

export default MenuOffcanvas