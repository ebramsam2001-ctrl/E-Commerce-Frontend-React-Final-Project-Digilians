import React from 'react'

export default function Carousel(props) {
    const { images } = props;

    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center vh-100 mb-5">
                <div id="carouselExampleCaptions" className="carousel slide w-75 shadow-lg" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={images[0]} className="d-block w-100" alt="Slide 1" />
                            <div className="carousel-caption d-none d-md-block text-start">
                                <h2 className="display-4 fw-bold">Transform Your Space</h2>
                                <p className="fs-5">Elevate your life with VisioCreate decorations.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={images[1]} className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption d-none d-md-block text-start">
                                <h2 className="display-4 fw-bold">Modern Furniture</h2>
                                <p className="fs-5">Explore our new collection for 2024.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={images[2]} className="d-block w-100" alt="Slide 3" />
                            <div className="carousel-caption d-none d-md-block text-start">
                                <h2 className="display-4 fw-bold">Luxury Designs</h2>
                                <p className="fs-5">Quality you can feel in every corner.</p>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
