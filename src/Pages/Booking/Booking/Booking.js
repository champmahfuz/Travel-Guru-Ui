// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import './Booking.css';


// const Booking = () => {
//     const { serviceId } = useParams();
//     const [services, setServices] = useState([])
//     const [details, setDetails] = useState([]);
//     useEffect(() => {
//         fetch('/services.json')
//             .then(res => res.json())
//             .then(data => setServices(data));
//     }, [])



//     useEffect(() => {
//         const info = services.find(product => product?.price == serviceId);
//         setDetails(info)
//     }, [services])
//     return (
//         <div className='container'>

//             <div className="details pb-3" >
//                 <img src={details?.img} alt="" />
//                 <h3>{details?.name}</h3>

//                 <h5>Price:{serviceId} tk</h5>
//                 <p>{details?.description}</p>
//                 <Link to="/services"><button className="btn btn-success">View All</button> </Link>
//             </div>
//         </div>


//     );
// };

// export default Booking;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className='container'>

            <div className="details pb-3" >
                <img src={service.img} alt="" />
                <h5>Details of: {service.name}</h5>
                <h6>Price:{service.price}</h6>
                <p>Service Id: {serviceId}</p>
                <p>{service.description}</p>
                <Link to="/manageServices"><button className="btn btn-success">Manage Services</button> </Link>
            </div>
        </div>


        // <div>
        //     <h2>Details of: {service.name}</h2>
        //     <h2>{service.price}</h2>
        //     <p>{service.description}</p>
        //     <img src={service.img} alt="" />
        //     <h2>this is booking: {serviceId}</h2>
        // </div>
    );
};

export default Booking;

