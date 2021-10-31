import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <br /><br /><br />
            <div className="container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name :</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address :</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Address :</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Your Feedback :</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <Button variant="dark">Submit</Button>
            </div>
            <br /><br /><br />
        </div>


    );
};

export default Contact;