import React from 'react'

import { Link } from 'react-router-dom';

export default function ArticleSectionCard(props) {

    const {image, title} = props;

    return (
        <>
            <img className='w-100 rounded-5' src={image} alt="Article Image" />

            <div className="p-3">
                <h4 className='my-3'>{title}</h4>

                <Link to="/products" className="text-dark fw-semibold text-decoration-none border-bottom border-dark pb-1 mb-1">
                    Read More <i className="bi bi-arrow-right ms-1"></i>
                </Link>
            </div>
        </>
    );
}