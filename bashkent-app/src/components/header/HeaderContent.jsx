import React, { useEffect, useState } from 'react';
import content_logo from '../../bashkent-image/design/white.png';
import { Link, useFetcher, useLocation, useParams } from 'react-router-dom';
import { branchDatas } from '../../data/BranchData';
import { navLinks } from './HeaderNav';
import { blogsDatas } from '../../data/BlogsData';

export const HeaderContent = ({ homeTitle }) => {

  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [pageLinkName, setPageLinkName] = useState('');
  const [pageLinkSlug, setPageLinkSlug] = useState('');

  useEffect(() => {
    let link = navLinks.find((link) => link.slug === location.pathname);
    if (link) {
      setPageTitle(link.name);
      setPageLinkName(link.name);
      setPageLinkSlug(link.slug);
    }
    if(location.pathname === '/blogs'){
      setPageTitle('Bloqlar');
      setPageLinkName('Bloqlar');
      setPageLinkSlug('/blogs')
    }
  }, [location, navLinks])

  const { placeName, blogName } = useParams();
  console.log(blogName)
  const [place, setPlace] = useState();
  useEffect(() => {
    if (placeName) {
      let findPlace = branchDatas.find((branch) => branch.title === placeName);
      if (findPlace) {
        setPlace({ ...findPlace });
        setPageTitle('Filiallar')
        setPageLinkName('Filiallar')
        setPageLinkSlug('/place')
      }
    }
    console.log(location.pathname)
  }, [placeName, branchDatas])



  const [blog, setBlog] = useState();
  useEffect(() => {
    if (blogName) {
      let findBlog = blogsDatas.find((blog) => blog.title === blogName);
      if (findBlog) {
        setBlog({ ...findBlog });
        setPageTitle('Bloglar');
        setPageLinkName('Bloglar');
        setPageLinkSlug('/blogs')
      }
    }
  }, [blogName, blogsDatas])

  return (
    <div className='header-content'>
      <div className="container">
        {
          location.pathname === '/' ? (
            <div className="page-title">
              <h1>Ən dadlı yeməklərin ünvanı</h1>
              <div className='content-button'>
                <a href="">Ətraflı</a>
              </div>
            </div>
          ) : (
            <div className="page-title">
              <h1>{pageTitle}</h1>
              <img src={content_logo} alt="" />
              <div className="content-links">
                <Link to='/'>Əsas səhifə</Link>
                <i className="fa-solid fa-chevron-right"></i>
                <Link to={pageLinkSlug}>{pageLinkName}</Link>
                {
                  place && (
                    <>
                      <i className="fa-solid fa-chevron-right"></i>
                      <Link to={`/place/${place.title}`}>{place.title}</Link>
                    </>
                  )
                }
                {
                  blog && (
                    <>
                      <i className="fa-solid fa-chevron-right"></i>
                      <Link to={`/blog/${blog.title}`}>{blog.title}</Link>
                    </>
                  )
                }
              </div>
            </div>
          )
        }
        {/* <div className="page-title">
          <h1>{homeTitle}</h1>
          <img src={content_logo} alt="" />
          <div>
            <div className="content-links">
              <a href="/">Əsas Səhifə</a>
              <i className="fa-solid fa-chevron-right"></i>
              <a href="">{homeTitle}</a>
              {placeName && (
                <>
                  <i className="fa-solid fa-chevron-right"></i>
                  <a href="">{place.title}</a>
                </>
              )}

            </div>
          </div>

        </div> */}
      </div>

    </div>
  )
}
