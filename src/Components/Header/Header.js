import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        padding:"4px"
      }
    return (
        <div className='head'>
            <div className="header">
                <img className="header-img" src="https://www.cimch.edu.bd/assets/teacher/teacher.png" alt="" srcset=""/>

            <h2>Doctor's Call</h2>

            </div>
            
           
            <Navbar className="link"  variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container >
                    <Nav className="nav-bar btn" >
                    <Button variant="outline-dark"><NavLink to="/home"activeStyle={activeStyle} >Home</NavLink></Button>{' '}
                    <Button variant="outline-dark"> <NavLink to="/about"activeStyle={activeStyle}>About</NavLink></Button>{' '}
                    <Button variant="outline-dark"> <NavLink to="/doctor"activeStyle={activeStyle}>Appointment</NavLink></Button>{' '}
                    <Button variant="outline-dark"><NavLink to="/services"activeStyle={activeStyle}>Services</NavLink></Button>{' '}
                    <Button variant="outline-dark"><NavLink to="/contact"activeStyle={activeStyle}>Contact</NavLink></Button>{' '}
                    <Button variant="outline-dark"><NavLink to="/register"activeStyle={activeStyle}>Register</NavLink></Button>{' '}
                   
                    {user?.email? 
                     <Button onClick={logOut}  variant="outline-dark"><NavLink to="/login"activeStyle={activeStyle}>Log-Out</NavLink></Button> :
                    
                     <Button variant="outline-dark"><NavLink to="/login"activeStyle={activeStyle}>Log-In</NavLink></Button>}
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Logged in as: <a href="#login">{user?.email}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    
                    </Nav>
                </Container>
            </Navbar>
  
        </div>
    );
};

export default Header;