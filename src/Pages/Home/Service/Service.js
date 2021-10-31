import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-success">Details {name}</button>
            </Link >
            <br />

        </div>

    );
};

export default Service;