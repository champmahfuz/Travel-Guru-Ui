import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://grisly-skull-33698.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `https://grisly-skull-33698.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div className="manage">
            <h2 className="text-primary">Manage Services</h2>
            <div className="manage-container">
                {

                    services.map(service => <div key={service._id}>
                        <div className="single-item">
                            <img src={service.img} alt="" />
                            <h3>{service.name}</h3>

                            <button className="btn btn-primary" onClick={() => handleDelete(service._id)}>Delete</button>
                            <br /><br />
                            <Link to="/addService"><button className="btn btn-success">Add Services</button> </Link>
                        </div>

                    </div>)

                }
            </div>
        </div>
    );
};

export default ManageServices;