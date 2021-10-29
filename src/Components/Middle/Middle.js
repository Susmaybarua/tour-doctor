import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Middle = () => {
    const {serviceid} = useParams();
    const [singleServices, setSingleServices] = useState([]);


    const [singleService, setSingleService] = useState([]);

    useEffect (() =>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data =>setSingleServices(data))
    },[])

    useEffect (() =>{
        const foundService = singleServices.find(service => serviceid === serviceid)
        setSingleService(foundService);
    },[singleServices])
    return (
        <div>
            <img src={singleService?.img} alt=""/>
           <h5>Serial No. : {serviceid}</h5>
           <h4>Name :{singleService?.name}</h4>
           <p className="text-center" >Designation :{singleService?.designation}</p>
           <p className="text-center">Email :{singleService?.email}</p>
           <p className="text-center">Appoinment Time : 6pm -9pm</p>
           <Link to ="/services"><button className="btn btn-info mb-2">Back to services</button></Link>
        </div>
    );
};

export default Middle;