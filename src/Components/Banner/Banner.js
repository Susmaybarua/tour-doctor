import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div class="card">
            <div className="card-header">
            <h5 className="card-title">Special  Treatment</h5>
            </div>
            <div className="card-body">
            
            <p className="card-text">With supporting text below as a natural lead-in to additional content.loremWith supporting text below as a natural lead-in to additional content.loremWith supporting text below as a natural lead-in to additional content.loremWith supporting text below as a natural lead-in to additional content.</p>
            <Link to="#" className="btn btn-primary">Read More</Link>
            </div>
            </div>
        </div>
    );
};

export default Banner;
