import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, Container, NavItem } from "react-bootstrap";


import { Link } from 'react-router-dom';

const NavBarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link as={Link} to="/home">Navbar</Nav.Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavItem eventkey={1}>
                            <Nav.Link as={Link} to="/tabone">First</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={2}>
                            <Nav.Link as={Link} to="/tabtwo">Second</Nav.Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarComponent;

// https://reacttraining.com/blog/react-router-v6-pre/

// https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together