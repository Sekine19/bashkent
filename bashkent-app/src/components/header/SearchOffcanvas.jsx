import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';


export const SearchOffcanvas = ({showSearch, toggleSearch}) => {
    return (
        <>
            <Offcanvas className='search-canvas' show={showSearch} onHide={toggleSearch} placement='top'>
                <OffcanvasHeader className='canvas-header'>
                    <button className="close-button" onClick={() => toggleSearch()}>
                    <i className="fa-solid fa-xmark"></i>
                    </button>
                </OffcanvasHeader>
                <OffcanvasBody className='canvas-body'>
                    <form action="">
                        <input type="text" placeholder='Axtar' />
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}