import React from 'react';
import { useState } from 'react';
import logo from '../../bashkent-image/logo/logo.png';
import BannerSwiper from './BannerSwiper';
import { Link, useParams } from 'react-router-dom';
import MenuOffcanvas from './MenuOffcanvas';
import { SearchOffcanvas } from './SearchOffcanvas';
import { HeaderNav } from './HeaderNav';
import { HeaderContent } from './HeaderContent';
import { branchDatas } from '../../data/BranchData';

function Header() {


  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSearch = () => setShowSearch(!showSearch);


  

  return (
    <div className='header'>
      <BannerSwiper />
      <div className="headertop">
        <div className="header-general">
          <div className="container">
            <div className="inner">
              <Link className='rezerv' to=''>Rezervasiya</Link>
              <button className='menu-button' onClick={() => toggleMenu()}>
                <i className="fa-solid fa-bars"></i>
              </button>
              <a href="/" className='logo'>
                <img src={logo} alt="" />
              </a>
              <div className="right">
                <form className="search">
                  <input type="text" placeholder="Axtar" />
                  <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div className="sosial-icons">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <button className='search-button' onClick={() => toggleSearch()}>
                  <i className="fa-solid fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderNav />
      {/* <HeaderContent /> */}

      <MenuOffcanvas showMenu={showMenu} toggleMenu={toggleMenu} />
      <SearchOffcanvas showSearch={showSearch} toggleSearch={toggleSearch} />
    </div>
  )
}

export default Header