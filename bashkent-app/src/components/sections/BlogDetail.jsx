import React from 'react'
import { useParams } from 'react-router-dom'
import { blogsDatas } from '../../data/BlogsData';
import blog_logo from '../../bashkent-image/design/rotate.png'
import Layout from '../Layout';

function BlogDetail() {
    const { blogName } = useParams();
    const blog = blogsDatas.find((blog) => blog.title === blogName)


    return (
        <Layout>
            <section>
                <div className="container">
                    <div className="detail-card">
                        <div className="title">
                            <h2>{blog.title}</h2>
                            <img src={blog_logo} alt="" />
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="blog-image">
                                    <img src={blog.image} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="text">
                                    <p>{blog.text}</p>
                                </div>
                                <div className="date">
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default BlogDetail