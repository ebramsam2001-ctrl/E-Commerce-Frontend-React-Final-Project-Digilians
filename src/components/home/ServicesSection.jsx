import React from 'react'
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <ServiceCard
                            icon={<i className="bi bi-truck h1"></i>}
                            title="Free Shipping"
                            paragraph="Order above $ 200"
                        />
                    </div>
                    <div className="col-md-3">
                        <ServiceCard
                            icon={<i className="bi bi-cash-stack h1"></i>}
                            title="Money-back"
                            paragraph="30 days guarantee"
                        />
                    </div>
                    <div className="col-md-3">
                        <ServiceCard
                            icon={<i className="bi bi-lock h1"></i>}
                            title="Secure Payments"
                            paragraph="Secured by Stripe"
                        />
                    </div>
                    <div className="col-md-3">
                        <ServiceCard
                            icon={<i className="bi bi-telephone h1"></i>}
                            title="24/7 Support"
                            paragraph="Phone and Email support"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}