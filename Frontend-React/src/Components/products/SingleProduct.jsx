import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import notFound from "../../assets/notFound.png"

export default function SingleProduct() {
    const location = useLocation();
    const productData = location.state?.productData;

    const { image, title, price, oldPrice, discount, rating, isNew } = productData;

    const [quantity, setQuantity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="container py-4">
            <nav style={{ '--bs-breadcrumb-divider': "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/home" className="text-decoration-none text-secondary">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/shop" className="text-decoration-none text-secondary">Shop</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/living-room" className="text-decoration-none text-secondary">Living Room</Link>
                    </li>
                    <li className="breadcrumb-item active text-dark fw-bold" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div id="productCarousel" className="carousel slide position-relative">
                        <div className="position-absolute top-0 start-0 p-3 d-flex flex-column gap-2" style={{ zIndex: 10 }}>
                            {isNew && <span className="badge bg-white text-dark fw-bold px-3 py-2 shadow-sm">NEW</span>}
                            {discount && <span className="badge bg-success text-white fw-bold px-3 py-2">{discount}</span>}
                        </div>

                        <div className="carousel-inner bg-light rounded-4 overflow-hidden shadow-sm">
                            {
                                [...Array(3)].map((_, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img
                                            src={image || notFound}
                                            className="d-block w-100 object-fit-contain"
                                            style={{ height: "500px" }}
                                            alt={`${title} view ${index + 1}`}
                                        />
                                    </div>
                                ))}
                        </div>

                        <button className="carousel-control-prev"
                            type="button"
                            data-bs-target="#productCarousel"
                            data-bs-slide="prev"
                            style={{ width: '10%', opacity: 1 }}
                        >
                            <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <i className="bi bi-chevron-left text-dark"></i>
                            </div>
                        </button>
                        <button className="carousel-control-next"
                            type="button"
                            data-bs-target="#productCarousel"
                            data-bs-slide="next"
                            style={{ width: '10%', opacity: 1 }}
                        >
                            <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <i className="bi bi-chevron-right text-dark"></i>
                            </div>
                        </button>

                        {/* Indicators (Dots Style) */}
                        <div className="carousel-indicators mb-0 pb-3">
                            {
                                [...Array(3)].map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#productCarousel"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? 'active' : ''}
                                        aria-current={index === 0 ? 'true' : 'false'}
                                        style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#000', margin: '0 5px' }}
                                    ></button>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="col-md-6 ps-md-5 mt-4 mt-md-0 text-start">
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="text-warning">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={`bi bi-star-fill ${i < rating ? '' : 'text-muted'}`}></i>
                            ))}
                        </div>
                        <span className="text-muted small">(11 Reviews)</span>
                    </div>

                    <h1 className="fw-bold mb-3">{title}</h1>

                    <p className="text-muted mb-4">
                        Experience premium comfort with this elegant piece of furniture. Perfect for your modern home setup.
                    </p>

                    <div className="d-flex align-items-center gap-3 mb-4">
                        <h2 className="fw-bold mb-0">${price}</h2>
                        {oldPrice && <h4 className="text-muted text-decoration-line-through mb-0">${oldPrice}</h4>}
                    </div>

                    <p className='text-secondary'>Choose Color <i class="bi bi-arrow-right-short"></i></p>

                    <p className='fw-bold'>Grey</p>

                    <div className="d-flex gap-4 mb-4">
                        <div className="border border-dark border-2 rounded-4 p-3">Black</div>
                        <div className="border border-secondary border-2 rounded-4 p-3">Grey</div>
                        <div className="border border-light border-2 rounded-4 p-3">White</div>
                        <div className="border border-danger border-2 rounded-4 p-3">Red</div>
                    </div>

                    <div className="d-flex align-items-center gap-5">
                        <div className="btn-group border rounded-3 p-1" role="group" style={{ backgroundColor: '#f3f5f7' }}>
                            <button
                                type="button"
                                className="btn btn-link text-dark text-decoration-none px-3"
                                onClick={decrement}
                            >
                                <i className="bi bi-dash-lg"></i>
                            </button>

                            <span className="d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px' }}>
                                {quantity}
                            </span>

                            <button
                                type="button"
                                className="btn btn-link text-dark text-decoration-none px-3"
                                onClick={increment}
                            >
                                <i className="bi bi-plus-lg"></i>
                            </button>
                        </div>

                        <button
                            type="button"
                            className={`btn btn-outline-dark fw-bold fs-5 w-100 border-2 rounded-4 d-flex align-items-center justify-content-center gap-2 py-2 transition-all`}
                            style={{
                                backgroundColor: isHovered ? 'black' : 'transparent',
                                color: isHovered ? 'white' : 'black'
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <i className={`bi ${isHovered ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                            Wishlist
                        </button>
                    </div>

                    <button className="btn btn-dark w-100 py-3 rounded-3 fw-bold shadow-sm mt-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}