import React, { useEffect, useState } from 'react';
import Professor from '../Professor/Professor';
import './Professors.css'


const Professors = () => {
    const [prof, setProf] = useState([]);
    useEffect(() => {
        fetch('./professor.json')
        .then(res => res.json())
        .then(data =>setProf(data) );
    },[])

    return (
        <div>
                       <h2>Find Your Doctor</h2>
            <div className="container professors ">
            {
                prof.map(professor => <Professor
                key = {professor.id}
                professor = {professor}>

                </Professor>
                    )
                }
                
            </div>

        </div>
    );
};

export default Professors;