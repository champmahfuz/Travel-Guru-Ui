import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [allPlan, setAllPlan] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myServicesPlan')
            .then(res => res.json())
            .then(data => setAllPlan(data));

    }, []);
    return (

        <>
            <h2>All Services</h2>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    allPlan.map(plan => <Card className="mx-3 ">

                        <Card.Body>
                            <Card.Title key={plan._id}>{plan.title}</Card.Title>
                            <p>Services: {plan.description}</p>
                            <Link to="/myservices"><button className="btn btn-warning">View All</button> </Link>



                        </Card.Body>
                    </Card>)
                }
            </div >


        </>
    );
};

export default AllServices;
