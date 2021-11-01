import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


import useAuth from '../../../hooks/useAuth';


const MyServices = () => {
    const { user } = useAuth()
    const email = user.email;
    console.log(email);
    const [onlyMyPlan, setOnlyMyPlan] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://grisly-skull-33698.herokuapp.com/myServicesPlan`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOnlyMyPlan(data));

    }, [])

    useEffect(() => {
        const productInfo = onlyMyPlan.filter(pro => pro?.email == email);

        setDetails(productInfo)
    }, [onlyMyPlan])

    const handleDeleteServices = id => {
        const proced = window.confirm('Are You sure you want to delete..?');
        if (proced) {
            const url = `https://grisly-skull-33698.herokuapp.com/myServicesPlan/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingServices = details.filter(details => details._id !== id);
                        setDetails(remainingServices);

                    }

                })
        }
    }
    return (

        <>
            <h2>My Services</h2>

            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">



                {
                    details.map(Services => <Card className="mx-3  ">

                        <Card.Body>
                            <Card.Title>{Services.title}</Card.Title>
                            <p>Services: {Services.description}</p>
                            <p>Price :{Services.price}</p>
                            <p>Status :{Services.status}</p>
                            <button className="btn btn-danger" onClick={() => handleDeleteServices(Services._id)}>Cancel</button>
                            <button className="btn mx-2 btn-success" >Confirm</button>

                        </Card.Body>
                    </Card>)
                }


            </div >


        </>
    );
};

export default MyServices;

