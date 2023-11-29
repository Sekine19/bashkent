import React from 'react';
import { mainImages } from '../../data/MenuData';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  


export const MainMenu = ({menuStatus}) => {
    return (
        <div className={`menu-container ${menuStatus === 'main' ? '' : 'd-none'}`}>
            <div className="row">
                {
                    mainImages.map((image, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                            <div className="menu-card">
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
