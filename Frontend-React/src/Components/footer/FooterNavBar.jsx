import React from 'react'
import { Link } from 'react-router-dom';

export default function FooterNavBar() {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row p-5">
                    <div className="col-md-2">
                        <Link className="navbar-brand fw-bold text-light fs-2 py-2 px-4 border-end border-light" to="/">VisioCreate</Link>
                    </div>

                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <p className="mb-0 text-secondary">Gift & Decoration Store</p>
                    </div>

                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                        <ul className="navbar-nav d-flex flex-row gap-3 mb-0 text-light">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className='border-light' />

                <div className="row p-2">
                    <div className="col-md-3">
                        <p className='text-secondary'>Copyright &copy; 2024 VisioCreate. All rights resorved</p>
                    </div>
                    <div className="col-md-1">
                        <Link className='nav-link text-decoration-none text-light' to="#">Privacy Policy</Link>
                    </div>
                    <div className="col-md-1">
                        <Link className='nav-link text-decoration-none text-light' to="#">Terms of Use</Link>
                    </div>
                    <div className="col-md-7 d-flex align-items-center justify-content-end gap-3 pe-5">
                        <i className="fa-brands fa-instagram text-light fs-5"></i>
                        <i className="fa-brands fa-facebook text-light fs-5"></i>
                        <i className="fa-brands fa-youtube text-light fs-5"></i>
                    </div>
                </div>
            </div>
        </>
    );
}