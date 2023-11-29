import React from 'react';
import { deliveryImages } from '../../data/MenuData';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

export const DeliveryMenu = ({menuStatus}) => {
    return (
        <div className={`menu-container ${menuStatus === 'delivery' ? '' : 'd-none'}`}>
            <div className="row">
                {
                    deliveryImages.map((image, index) => (
                        <div key={index} className="col-12 col-xl-6">
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
