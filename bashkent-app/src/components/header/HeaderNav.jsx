import React, { useState } from 'react';
import { HeaderContent } from './HeaderContent';
import { Link, NavLink } from 'react-router-dom';


export const navLinks = [
    {
        id: 1,
        slug: "/",
        name: "Əsas Səhifə",
    },
    {
        id: 2,
        slug: "/about",
        name: "Haqqımızda",
    },
    {
        id: 3,
        slug: "/place",
        name: "Filiallar",
    },
    {
        id: 4,
        slug: "/food",
        name: "Yeməklər",
    },
    {
        id: 5,
        slug: "/gallery",
        name: "Qalereya",
    },
    {
        id: 6,
        slug: "/menu",
        name: "Menyu",
    },
    {
        id: 7,
        slug: "/comment",
        name: "Rəylər",
    },
    {
        id: 8,
        slug: "/contact",
        name: "Əlaqə",
    },
]

export const HeaderNav = () => {

    const [homeTitle, setHomeTitle] = useState('Ən dadlı yeməklərin ünvanı');
    const changeHomeTitle = (title) => {
        setHomeTitle(title)
    }
    


    return (
        <div className="header-nav">
            <div className="container">
                <div className="links">
                    {
                        navLinks.map(link => (
                            <NavLink activeClassName='active' key={link.id} to={link.slug}>{link.name}</NavLink>
                        ))
                    }
                    {/* <Link onClick={() => changeHomeTitle('Ən dadlı yeməklərin ünvanı')} className={homeTitle === 'Ən dadlı yeməklərin ünvanı' ? 'changeHomeTitle' : ''} to="/">Əsas Səhifə</Link>
                    <Link onClick={() => changeHomeTitle('Haqqımızda')} className={homeTitle === 'Haqqımızda' ? 'changeHomeTitle' : ''} to="/about">Haqqımızda</Link>
                    <Link onClick={() => changeHomeTitle('Filiallar')} className={homeTitle === 'Filiallar' ? 'changeHomeTitle' : ''} to="/place">Filiallar</Link>
                    <Link onClick={() => changeHomeTitle('Yeməklər')} className={homeTitle === 'Yeməklər' ? 'changeHomeTitle' : ''} to="/food">Yeməklər</Link>
                    <Link onClick={() => changeHomeTitle('Qalereya')} className={homeTitle === 'Qalereya' ? 'changeHomeTitle' : ''} to="/gallery">Qalereya</Link>
                    <Link onClick={() => changeHomeTitle('Menyu')} className={homeTitle === 'Menyu' ? 'changeHomeTitle' : ''} to="/menu">Menyu</Link>
                    <Link onClick={() => changeHomeTitle('Rəylər')} className={homeTitle === 'Rəylər' ? 'changeHomeTitle' : ''} to="/comment">Rəylər</Link>
                    <Link onClick={() => changeHomeTitle('Əlaqə')} className={homeTitle === 'Əlaqə' ? 'changeHomeTitle' : ''} to="/contact">Əlaqə</Link> */}
                </div>
            </div>
            <div>
                <div>
                    <HeaderContent homeTitle={homeTitle} />
                </div>
            </div>

        </div>
    )
}

