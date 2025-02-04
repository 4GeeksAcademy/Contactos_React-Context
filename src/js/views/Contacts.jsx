import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardContact from "../component/CardContact.jsx";



const Contacts = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listContacts)

    // useEffect(() => {
        
    // }, [])

    return (

        <div className="w-50 mx-auto mt-3">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success"><i class="fa-solid fa-plus"></i> New Contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.length > 0 && store.listContacts.map((contact, index) => {
                    return (
                        <CardContact contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default Contacts;