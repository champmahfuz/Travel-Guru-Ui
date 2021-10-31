import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/services';

    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    history.push(redirect_uri);
                    reset();
                }
            })

    }
    return (
        <div className="container">
            <div className="add-service">
                <h2>Please add a service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="img url" />
                    {/* <input type="submit" /> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;