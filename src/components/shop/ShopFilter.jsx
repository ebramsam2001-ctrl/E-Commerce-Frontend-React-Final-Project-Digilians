import React, { useState } from 'react'
import { productView, changeProductView } from "../../public/PublicVariablesAndMethods";

export default function ShopFilter() {
    const [dropdown1, setDropDown1] = useState("All Room");
    const [dropdown2, setDropDown2] = useState("All Price");
    const [dropdown3, setDropDown3] = useState("Sort By");

    // can be made without use state
    const [desplaying, setDesplaying] = useState(productView);

    let changeSelection1 = (selected) => {
        setDropDown1(selected);
    };

    let changeSelection2 = (selected) => {
        setDropDown2(selected);
    };

    let changeSelection3 = (selected) => {
        setDropDown3(selected);
    };

    let changeDesplaying = (selected) => {
        setDesplaying(selected);

        changeProductView(desplaying);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <p className='ms-1'
                            style={{ fontSize: "15px" }}>
                            CATEGORIES
                        </p>

                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn dropdown-toggle shadow border border-secondary-subtle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {dropdown1}
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0">
                                <li>
                                    <button className="dropdown-item py-2" type="button" onClick={() => changeSelection1("All Room")}>
                                        All Room
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item py-2" type="button" onClick={() => changeSelection1("Living Room")}>
                                        Living Room
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item py-2" type="button" onClick={() => changeSelection1("Bed Room")}>
                                        Bed Room
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item py-2" type="button" onClick={() => changeSelection1("Dinning Room")}>
                                        Dinning Room
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className='ms-1'
                            style={{ fontSize: "15px" }}>
                            PRICE
                        </p>

                        <button
                            type="button"
                            className="btn dropdown-toggle shadow border border-secondary-subtle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {dropdown2}
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0">
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection2("All Price")}>
                                    All Price
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection2("100 $ -- 500 $")}>
                                    100 $ -- 500 $
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection2("500 $ -- 1000 $")}>
                                    500 $ -- 1000 $
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection2("1000 $ -- .....")}>
                                    1000 $ -- .....
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end gap-3">
                        <button
                            type="button"
                            className="btn dropdown-toggle shadow border border-secondary-subtle h-50"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {dropdown3}
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0">
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection3("SortBy")}>
                                    Sort By
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection3("Category")}>
                                    Category
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection3("Category")}>
                                    Category
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item py-2" type="button" onClick={() => changeSelection3("Category")}>
                                    Category
                                </button>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-end mb-3">
                            <div className="btn-group border rounded-1 overflow-hidden" role="group">
                                <button type="button"
                                        className="btn btn-white border-end shadow-none p-2 bg-white"
                                        onClick={() => changeDesplaying(1)}
                                >
                                    <i className="bi bi-grid-3x3-gap-fill text-secondary"></i>
                                </button>

                                <button type="button"
                                        className="btn btn-white border-end shadow-none p-2 bg-white"
                                        onClick={() => changeDesplaying(2)}
                                >
                                    <i className="bi bi-grid-fill text-dark"></i>
                                </button>

                                <button type="button"
                                        className="btn btn-white border-end shadow-none p-2 bg-white"
                                        onClick={() => changeDesplaying(3)}
                                >
                                    <i className="bi bi-pause-fill text-secondary" style={{ transform: 'rotate(90deg)' }}></i>
                                </button>

                                <button type="button"
                                        className="btn btn-white border-end shadow-none p-2 bg-white"
                                        onClick={() => changeDesplaying(4)}
                                >
                                    <i className="bi bi-distribute-vertical text-secondary"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
