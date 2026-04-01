import React from 'react'

export default function ServiceCard(props) {
    const { icon, title, paragraph } = props;
    return (
        <>
            <div className="card border-0 rounded-4 p-4 shadow-none bg-secondary bg-opacity-25">
                <div className="mb-3 text-start">
                    {icon}
                </div>

                <h5 className="fw-semibold text-dark mb-2 text-start">
                    {title}
                </h5>

                <p className="text-muted small mb-0 text-start">
                    {paragraph}
                </p>
            </div>
        </>
    );
}