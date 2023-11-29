import React from 'react';
import { useParams } from 'react-router-dom';
import { branchDatas } from '../../data/BranchData';
import { Gallery } from '../../components/sections/Gallery'
import Layout from '../Layout';

export const PlaceDetail = () => {
    const { placeName } = useParams();
    const place = branchDatas.find((place) => place.title === placeName)



    return (
        <Layout>
            <div className='place-detail'>
                <div className="container">
                    <div className="detail-card">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div className="image">
                                    <img src={place.image} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">
                                <div className="content">
                                    <div className="title">
                                        <h2>{place.title}</h2>
                                    </div>
                                    <div className="text">
                                        <p>{place.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <Gallery />
                </div>
            </div>
        </Layout>
    )
}
