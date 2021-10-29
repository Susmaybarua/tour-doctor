import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('./service.json')
        .then(res => res.json())
        .then(data =>setDoctor(data) );
    },[])
    return (
        <div>
            <h2>Our Doctors</h2>
            
            <h5>Total Doctors: 0{doctor.length}</h5>
            <div className="services">
            {
                doctor.map( service => <Service
                    key={service.id}
                    service = {service}>
                    
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;