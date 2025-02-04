import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import CardContact from "../component/CardContact.jsx";

const Contacts = () => {
    const { store, actions } = useContext(Context);
    const contacts = store.listContacts || [];

    // Función para eliminar todos los contactos
    const handleDeleteAll = () => {
        actions.deleteAllContacts();
        alert("All contacts deleted successfully!");
    };

    return (
        <div className="w-50 mx-auto mt-3">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">
                        <i className="fa-solid fa-plus"></i> New Contact
                    </button>
                </Link>
            </div>
            
            {contacts.length > 0 ? (
                <>
                    <ul className="list-group mt-3">
                        {contacts.map((contact) => (
                            <CardContact contact={contact} key={contact.id} />
                        ))}
                    </ul>

                    {/* Mostrar el botón solo si hay más de 1 contacto */}
                    {contacts.length > 1 && (
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-danger" onClick={handleDeleteAll}>
                                <i className="fa-solid fa-trash-can"></i> Delete All Contacts
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p className="position-absolute top-50 start-50 translate-middle text-center" style={{ transform: 'translate(-50%, -50%)' }}>
                    <h2>No contacts available</h2>
                </p>
            )}
        </div>
    );
};

export default Contacts;
