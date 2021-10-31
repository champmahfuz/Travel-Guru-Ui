import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

import Services from '../Services/Services';


const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])

    return (
        <div id="home">
            <Banner></Banner>


            <div id="services">
                <h2 className="text-primary mt-5">Our Services</h2>
                <div className="service-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;