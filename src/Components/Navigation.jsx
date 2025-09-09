import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function NavScrollExample() {
  return (
<Navbar expand="lg" className='navbar'>

      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav className='navwords'>
        <div className='navlinks'>
            <ul>
              <Nav.Link as={Link} to="/" id="basic-nav-dropdown">Home</Nav.Link>
            <Nav.Link as={Link} to="./About" id="basic-nav-dropdown">About</Nav.Link>
            <Nav.Link as={Link} to="./Service" id="basic-nav-dropdown">Service</Nav.Link>
            <Nav.Link as={Link} to="./Team" id="basic-nav-dropdown">Team</Nav.Link>
            <Nav.Link as={Link} to="./Contact" id="basic-nav-dropdown">Contact</Nav.Link>
            </ul>
           <div>
                <button className='navbutton'><h4 className='navv'>Book A Meeting</h4></button>
            </div>
        </div>
          </Nav>
          
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;