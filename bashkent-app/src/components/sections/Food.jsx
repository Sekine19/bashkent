import React from 'react';
import { foodCategory } from '../../data/FoodData';
import { Link } from 'react-router-dom';

export const Food = () => {



    return (
        <section className="food-category">
            <div className='container-food'>
                <div className="row">
                    {
                        foodCategory.map((banner) => (
                            <Link key={banner.id} to={`/food/${banner.id}`} className="col-12 col-md-6 col-lg-4">
                                <div className="category-card">
                                    <div className="category-img">
                                        <img src={banner.image} alt="" />
                                    </div>
                                    <div className="hover">
                                        <span>{banner.title}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
