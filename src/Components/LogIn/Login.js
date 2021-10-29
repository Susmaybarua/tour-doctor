import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
            <h2>Please Log-In</h2>
            <button className="btn btn-info" onClick={signInUsingGoogle}>Sign in with Google</button>
            <br/>
            <Link to ="/register">New User?</Link>

        </div>
    );
};

export default Login;