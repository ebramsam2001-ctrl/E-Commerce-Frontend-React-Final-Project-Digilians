import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import notFound from "../../assets/notFound.png"

export default function ProductCard(props) {
    const { image, title, price, oldPrice, discount, rating, isNew } = props;

    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    const renderStars = (num) => {
        return [...Array(5)].map((_, i) => (
            <i key={i} className={`bi bi-star-fill ${i < num ? 'text-warning' : 'text-muted'} ms-1`}></i>
        ));
    };

    const goToSingleProductPage = () => {
        navigate(`/abc`, { state: { productData: props } });
    };

    return (
        <div className="col-md-3 mb-4"
            onClick={goToSingleProductPage}
            style={{ cursor: 'pointer' }}
        >
            <div
                className="card border-0 rounded-4 overflow-hidden position-relative product-card shadow-sm"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="position-absolute top-0 start-0 p-3 d-flex flex-column gap-2" style={{ zIndex: 3 }}>
                    {isNew && <span className="badge bg-white text-dark fw-bold rounded-1 px-3 py-2 shadow-sm">NEW</span>}
                    {discount && <span className="badge bg-success text-white fw-bold rounded-1 px-3 py-2">{discount}</span>}
                </div>

                {isHovered && (
                    <button className="btn btn-white rounded-circle position-absolute top-0 end-0 m-3 shadow-sm d-flex align-items-center justify-content-center p-2 bg-white"
                        style={{ zIndex: 3, width: "36px", height: "36px" }}>
                        <i className="bi bi-heart text-muted"></i>
                    </button>
                )}

                <div className="card-img-container overflow-hidden d-flex align-items-center justify-content-center position-relative" style={{ height: "250px", backgroundColor: "#f3f5f7" }}>
                    <img src={image || notFound} className="w-100 h-100 object-fit-contain p-4 transition-img" alt={title} />

                    {isHovered && (
                        <div className="position-absolute bottom-0 start-0 end-0 p-3">
                            <button className="btn btn-primary w-100 rounded-3 fw-semibold text-white py-2">
                                Add to cart
                            </button>
                        </div>
                    )}
                </div>

                <div className="card-body bg-white p-3">
                    <div className="rating mb-2 text-start">
                        {renderStars(rating)}
                    </div>
                    <h5 className="card-title fw-semibold text-start text-dark mb-1 h6">{title}</h5>
                    <div className="d-flex align-items-baseline gap-2 text-start">
                        <span className="fw-bold text-dark fs-6">${price}</span>
                        {oldPrice &&
                            <span className="text-muted text-decoration-line-through fs-7">${oldPrice}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};