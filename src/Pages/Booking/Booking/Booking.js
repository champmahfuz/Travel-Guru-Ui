import React, { useEffect, useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Booking.css';



const Booking = () => {
    const titleRef = useRef();
    const userRef = useRef();
    const emailRef = useRef();
    const statusRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const { user } = useAuth();
    const [myPlan, setMyPlan] = useState({});
    const { id } = useParams();
    const { serviceId } = useParams();

    useEffect(() => {
        const url = `https://grisly-skull-33698.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPlan(data));
    }, [])
    console.log(myPlan);
    const handleMyPlan = e => {
        const title = titleRef.current.value;
        const username = userRef.current.value;
        const email = emailRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const status = statusRef.current.value;
        const newPlan = { title, username, email, description, price, status };
        fetch('http://https://grisly-skull-33698.herokuapp.com/myServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlan)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Add Services')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <>

            <div className=" mr-3 w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-5 g-5">


                <Card className="mx-3 my-4  ">
                    <Card.Img className="img" variant="top" src={myPlan.img} />
                    <Card.Body>
                        <Card.Title key={myPlan._id}>{myPlan.title}</Card.Title>

                        <p>{myPlan.description}</p>


                    </Card.Body>


                    <Form className="m-3" onSubmit={handleMyPlan}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" value={user.displayName} ref={userRef} placeholder=" " />
                            <Form.Control type="text" hidden value={user.email} ref={emailRef} placeholder=" " />
                            <Form.Control type="text" hidden value="Pending" ref={statusRef} placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" value={myPlan.description} ref={descriptionRef} placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" value={myPlan.price} ref={priceRef} rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" value={myPlan.title} ref={titleRef} placeholder=" " />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        <Link to="/services"><button className="mx-3 btn btn-dark">View All</button> </Link>
                    </Form>
                </Card>
            </div >
        </>
    );
};

export default Booking;
