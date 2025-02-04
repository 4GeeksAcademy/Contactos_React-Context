import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context)

    const eliminarContacto = () => {
        console.log(contact)
        actions.deleteContact(contact.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-start">
            <div className="d-flex align-items-center w-75">
                <div className="col-md-3 d-flex justify-content-center">
                        <i class="fa-solid fa-user fa-5x"></i>
                </div>

                <div className="col-md-10">
                    <h5 className="card-title mb-1"><i class="fa-solid fa-user"></i> {contact.name}</h5>
                    <p className="card-text mb-1"><i class="fa-solid fa-location-dot"></i> {contact.address}</p>
                    <p className="card-text mb-1"><i class="fa-solid fa-phone"></i> {contact.phone}</p>
                    <p className="card-text mb-1"><i class="fa-solid fa-envelope"></i> {contact.email}</p>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                    <Link to={"/editContact/" + contact.id} className="btn">
                    <i class="fa-solid fa-pen-to-square fa-2x"></i>
                    </Link>

                    <button type="btn" className="btn bg-transparent border-0 p-0" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                        <i class="fa-solid fa-trash-can fa-2x"></i>
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    If you delete this thing the etire universe will go down!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes baby!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default CardContact