import React, { useState } from 'react';
import { CardsImage } from '../cards/CardsImage';
import { CardsVideo } from '../cards/CardsVideo';


export const Gallery = () => {
    const [galleryStatus, setGalleryStatus] = useState('photo');
    const changeGalleryStatus = (status) => {
        setGalleryStatus(status)
    }
    return (
        <div className='gallery'>
            <div className="container">
                <div className="gallery-buttons">
                    <button onClick={() => changeGalleryStatus('photo')} className={galleryStatus === 'photo' ? 'active' : ''}>Fotolar</button>
                    <button onClick={() => changeGalleryStatus('video')} className={galleryStatus === 'video' ? 'active' : ''}>Videolar</button>
                </div>
                <div className="gallery-content">
                    <CardsImage galleryStatus={galleryStatus} />
                    <CardsVideo galleryStatus={galleryStatus} />
                </div>
            </div>
        </div>
    )
}
