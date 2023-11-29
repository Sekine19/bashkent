import React from 'react';
import { videoImage } from '../../data/GalleryData';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

export const CardsVideo = ({ galleryStatus }) => {
    return (
        <div className={`gallery-container ${galleryStatus === 'video' ? '' : 'd-none'}`}>
            <div className="row">
                {
                    videoImage.map((image, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                            <div className="gallery-card">
                                <img src={image} alt="" />
                                <a href={image} data-fancybox=''>
                                    <i className="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
