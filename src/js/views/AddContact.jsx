import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams(); 

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [location, setLocation] = useState("");

    const handleSave = (event) => {
        event.preventDefault();
        if (!fullName.trim() || !phoneNumber.trim() || !emailAddress.trim() || !location.trim()) {
            alert("Please fill in all fields.");
            return;
        }
        
        const newContact = {
            name: fullName,
            phone: phoneNumber,
            email: emailAddress,
            address: location,
        };
        
        if (!id) {
            actions.createContact(newContact);
        } else {
            actions.editContact(id, newContact);
        }
        
        alert("Contact information saved successfully.");
        navigate("/");
        setFullName("");
        setPhoneNumber("");
        setEmailAddress("");
        setLocation("");
    };

    useEffect(() => {
        if (id && store.listContacts.length > 0) {
            const existingContact = store.listContacts.find(contact => contact.id == id);
            if (existingContact) {
                setFullName(existingContact.name);
                setPhoneNumber(existingContact.phone);
                setEmailAddress(existingContact.email);
                setLocation(existingContact.address);
            }
        }
    }, [id, store.listContacts]);

    return (
        <div className="w-50 mx-auto mt-3">
            <h1 className="text-center">{id ? "Edit Contact" : "Add Contact"}</h1>
            <form className="container" onSubmit={handleSave}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Enter full name" onChange={(e) => setFullName(e.target.value)} value={fullName} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Enter email" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phoneInput" placeholder="Enter phone number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressInput" className="form-label">Address</label>
                    <input type="text" className="form-control" id="addressInput" placeholder="Enter address" onChange={(e) => setLocation(e.target.value)} value={location} required />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/" className="ms-3">Back</Link>
                </div>
            </form>
        </div>
    );
};

export default AddContact;
