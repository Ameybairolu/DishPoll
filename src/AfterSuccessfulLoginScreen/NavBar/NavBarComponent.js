import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, Container, NavItem, Button } from "react-bootstrap";


import { Link } from 'react-router-dom';

// NOTE: I used React bootstrap to declare this Navbar and its tab. 
// Nav Link is used in order to change the url based on the destination mentioned by the attribute "to"
// URL changing is required in ordered to switch between tabs easily

const NavBarComponent = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link as={Link} to="/home">DishPoll</Nav.Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavItem eventkey={1}>
                            <Nav.Link as={Link} to="/dishes">Dish-List</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={2}>
                            <Nav.Link as={Link} to="/scores">Scores</Nav.Link>
                        </NavItem>
                    </Nav>
                    <Button variant="outline-danger" onClick={props.logoutHandler}>Logout</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarComponent;

// https://reacttraining.com/blog/react-router-v6-pre/

// https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together