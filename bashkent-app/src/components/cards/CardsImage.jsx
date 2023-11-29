import React from 'react';
import { photoImage } from '../../data/GalleryData';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

export const CardsImage = ({ galleryStatus }) => {
    return (
        <div className={`gallery-container ${galleryStatus === 'photo' ? '' : 'd-none'}`}>
            <div className="row">
                {
                    photoImage.map((image, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                            <div className="gallery-card">
                                <img src={image} alt="" />
                                <a href={image} data-fancybox=''>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
