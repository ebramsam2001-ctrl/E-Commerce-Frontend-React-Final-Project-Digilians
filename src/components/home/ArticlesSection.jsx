import React from 'react'
import { Link } from 'react-router-dom';
import ArticleSectionCard from './ArticleSectionCard';

import image_8 from "../../assets/image_8.jpeg"

export default function ArticlesSection() {
    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-end pb-3">

                    <div className="d-flex flex-column lh-1">
                        <p className="h1 fw-bold mb-0">Articles</p>
                    </div>

                    <Link to="/products" className="text-dark fw-semibold text-decoration-none border-bottom border-dark pb-1 mb-1">
                        More Articles <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <ArticleSectionCard
                            image={image_8}
                            title="7 ways to decor your home"
                        />
                    </div>
                    <div className="col-md-4">
                        <ArticleSectionCard
                            image={image_8}
                            title="7 ways to decor your home"
                        />
                    </div>
                    <div className="col-md-4">
                        <ArticleSectionCard
                            image={image_8}
                            title="7 ways to decor your home"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}