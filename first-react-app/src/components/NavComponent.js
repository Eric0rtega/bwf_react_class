import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';

export const NavComponent = () => {
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='text-decoration-none'>
                        <img className="navLogo" style={{ width : '200px', height: 'auto', marginRight : '15px', padding : '10px' }} src={require("../flixnet_logo.png")}></img>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Link to='/' className='text-decoration-none' style={{ color : 'white' }}>Home &nbsp; &nbsp;</Link>
                        <Link to='/user-movie-list' className='text-decoration-none' style={{ color : 'white' }}>My List</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavComponent;