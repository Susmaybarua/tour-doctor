import React from 'react';
import { Link } from 'react-router-dom';
import './Professor.css'

const Professor = ({professor}) => {
    const {id, name, designation,email, img} = professor;
    return (
        <div className="text-center  mb-3 col-lg-4 professor "  >
            <div className="text-center">
            <img  src={img} alt=""/>
            </div>
            <div className="details">
            <h5>{name}</h5>
                <p className="text-center" > {designation}</p>
                <p> {email}</p>
                <Link to={`/middle/${id}`}><button className ="bg-info rounded">Details</button></Link>
                <Link to="/doctor"><button className ="mx-2 bg-info mt-2 text-danger mb-2 rounded">Call Now</button></Link>
                
            </div>
              

        </div>
    );
};

export default Professor;