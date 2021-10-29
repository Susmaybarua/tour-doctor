import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, designation,email, img} = service;
    return (
        <div>
            <div className="service">
            <img src={img} alt=""/>
                <h5>{name}</h5>
                <p className="text-center"> {designation}</p>
                <p className="text-center"> {email}</p>
                <Link to={`/middle/${id}`}><button className="btn btn-info mb-2">Details</button></Link>
                <Link to="/doctor"><button className="btn btn-info mb-2">Call Now</button></Link>
                
               
            </div>
        </div>
    );
};

export default Service;