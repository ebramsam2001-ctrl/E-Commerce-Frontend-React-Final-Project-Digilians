import React, { useState } from 'react';
import MyAccountLeftSide from './MyAccountLeftSide';

export default function MyAccount() {
    const getInitialData = () => {
        const stored = localStorage.getItem("LoginUser");
        if (!stored) return { name: '', email: '' };
        try {
            const parsed = JSON.parse(stored);
            return parsed.data || { name: '', email: '' };
        } catch (error) {
            console.error("Error parsing localStorage", error);
            return { name: '', email: '' };
        }
    };

    const userData = getInitialData();

    const getStoredUser = () => {
        const stored = localStorage.getItem("loginUser");
        if (!stored) return null;
        try {
            const parsed = JSON.parse(stored);
            return parsed.data || null;
        } catch (error) {
            console.log(error);
        }
    };

    const initialUser = getStoredUser();
    console.log(initialUser);

    const [firstName, setFirstName] = useState(userData.name || '');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState(userData.name || '');
    const [email, setEmail] = useState(userData.email || '');

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== repeatNewPassword) {
            alert("New passwords do not match!");
            return;
        }

        console.log("Saving data:", { firstName, lastName, name, email, newPassword });
    };

    return (
        <>
            <h1 className="h1 fs-1 d-flex justify-content-center align-item-center w-100 h-100 my-5">
                My Account
            </h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <MyAccountLeftSide name={name} />
                    </div>

                    <div className="col-md-8">
                        <div className="m-5">
                            <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-white">
                                <h3>Account Details</h3>

                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label text-muted small">FIRST NAME *</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-none py-2"
                                        id="firstName"
                                        placeholder='First Name'
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstName}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label text-muted small">LAST NAME *</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-none py-2"
                                        id="lastName"
                                        placeholder='Last Name'
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="displayName" className="form-label text-muted small">DISPLAY NAME *</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-none py-2"
                                        id="displayName"
                                        placeholder='Display name'
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                    />
                                    <div id="displayNameHelp" className="form-text">
                                        This will be how your name will be displayed in the account section and in reviews
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-muted small">EMAIL</label>
                                    <input
                                        type="email"
                                        className="form-control shadow-none py-2"
                                        id="email"
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />
                                </div>

                                <h3>Password</h3>

                                <div className="mb-3">
                                    <label htmlFor="oldPassword" className="form-label text-muted small">OLD PASSWORD</label>
                                    <input
                                        type="password"
                                        className="form-control shadow-none py-2"
                                        id="oldPassword"
                                        placeholder='Old Password'
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label text-muted small">NEW PASSWORD</label>
                                    <input
                                        type="password"
                                        className="form-control shadow-none py-2"
                                        id="newPassword"
                                        placeholder='New Password'
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="repeatNewPassword" className="form-label text-muted small">REPEAT NEW PASSWORD</label>
                                    <input
                                        type="password"
                                        className="form-control shadow-none py-2"
                                        id="repeatNewPassword"
                                        placeholder='Repeat New Password'
                                        value={repeatNewPassword}
                                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                                    />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark py-2 fw-bold">
                                        Save changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}