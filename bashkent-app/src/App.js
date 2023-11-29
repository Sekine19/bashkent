import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { AppAbout } from './components/AppAbout';
import { AppPlace } from './components/AppPlace';
import { AppGallery } from './components/AppGallery';
import { AppMenu } from './components/AppMenu';
import { AppComment } from './components/AppComment';
import { AppContact } from './components/AppContact';
import { AppFood } from './components/AppFood';
import { Blogs } from './components/sections/Blogs';
import BlogDetail from './components/sections/BlogDetail';
import { PlaceDetail } from './components/sections/PlaceDetail';
import { useEffect } from 'react';
import { BackToTopButton } from './components/scroll/BackToTopButton';
import { AppBlog } from './components/AppBlog';



function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/' element={<AppAbout />} />
        <Route path='/place/' element={<AppPlace />} />
        <Route path='/food' element={<AppFood />} />
        <Route path='/food/:categoryID' element={<AppFood />} />
        <Route path='/gallery' element={<AppGallery />} />
        <Route path='/menu' element={<AppMenu />} />
        <Route path='/comment' element={<AppComment />} />
        <Route path='/contact' element={<AppContact />} />
        <Route path='blogs' element={<AppBlog />} />
        <Route path='/blogs/:blogName' element={<BlogDetail />} />
        <Route path='/place/:placeName' element={<PlaceDetail />} />
      </Routes>
    </>
  );

}


export default App;
