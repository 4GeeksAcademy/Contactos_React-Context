import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const AddContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [location, setLocation] = useState("");

    const handleSave = (e) => {
        e.preventDefault();

        const newContact = {
            name: fullName,
            phone: phoneNumber,
            email: emailAddress,
            address: location,
        };

        actions.createContact(newContact);

        alert("Contact created successfully!");
        navigate("/");
        setFullName("");
        setPhoneNumber("");
        setEmailAddress("");
        setLocation("");
    };

    return (
        <div className="w-50 mx-auto mt-3">
            <h1 className="text-center">Add Contact</h1>
            <form className="container" onSubmit={handleSave}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label"><i className="fa-solid fa-user"></i> Full Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Enter full name" onChange={(e) => setFullName(e.target.value)} value={fullName} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label"><i className="fa-solid fa-envelope"></i> Email</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Enter email" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label"><i className="fa-solid fa-phone"></i> Phone</label>
                    <input type="text" className="form-control" id="phoneInput" placeholder="Enter phone number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressInput" className="form-label"><i className="fa-solid fa-location-dot"></i> Address</label>
                    <input type="text" className="form-control" id="addressInput" placeholder="Enter address" onChange={(e) => setLocation(e.target.value)} value={location} required />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Create</button>
                    <Link to="/" className="ms-3">Back</Link>
                </div>
            </form>
        </div>
    );
};

export default AddContact;
