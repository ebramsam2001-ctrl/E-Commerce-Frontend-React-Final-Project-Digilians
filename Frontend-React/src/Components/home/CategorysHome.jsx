import React from 'react'
import BigCard from './BigCard';
import SmallCard from './SmallCard';

export default function CategorysHome(props) {
    const { categorys} = props;

    return (
        <>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <BigCard
                            category={categorys[0]}
                        />
                    </div>

                    <div className="col-md-6 d-flex flex-column gap-4">
                        <SmallCard
                            category={categorys[1]}
                        />
                        <SmallCard
                            category={categorys[2]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
