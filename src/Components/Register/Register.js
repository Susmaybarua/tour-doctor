import { createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../Firebase/Firebase.init';
import './Register.css'


initializeAuthentication();



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState ('');
    const [isLogIn, setIsLogIn] = useState (false);

    const auth = getAuth();

    const toggleLogIn = (e) => {
        console.log(e.target.checked)

        setIsLogIn(e.target.checked)
    }

    const handleEmail = (e) => {
        console.log(e.target.value)

        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        console.log(email, password)
       if (password.length < 6){
           setError('Note:Password must be 6 characters')
           return;
       }
       if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('Note:Password must be 2 Uppercase')
        return; 
       }
       if(isLogIn){
           processLogIn(email, password);
       }
       else{
          registerNewUser(email, password) ;
       }
       
    }
    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {

            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        });

    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
           
    }
    return (
        <div >
            <div className="my-cart">
                <h2>Please {isLogIn ? 'Log-In':' Register'}</h2>

                <form onSubmit={handleRegistration}>

                    <input onBlur={handleEmail} type="email" placeholder="Enter your email" required/>
                    <br />
                    <input className="mt-2" onBlur={handlePassword} type="password" placeholder="Enter password" required /><br />
                   
                    <button className="btn btn-info mt-2">{isLogIn ? 'Log-In':' Register'}</button><br />
                    <p className= "text-danger">{error}</p>

                    <div class="mb-3 form-check">
                    <input onChange={toggleLogIn} type="checkbox" className="mx-2" id="exampleCheck1"/>
                    <label className="form-check-label text-center" for="exampleCheck1">Already Register!</label>
                    </div>
                </form>
                <span>I have an account <Link to="/login">Login with Google</Link></span><br />


            </div>
        </div>
    );
};

export default Register;