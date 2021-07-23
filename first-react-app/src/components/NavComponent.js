import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

export const NavComponent = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='text-decoration-none'>
                        <h1>Movie Database Tool</h1>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Link to='/' className='text-decoration-none'>Home</Link>
                        <Link to='/user-movie-list' className='text-decoration-none'>My List</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavComponent;