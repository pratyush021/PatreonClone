import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function LandingNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Lite</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Premium
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="For creators" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Podcasters</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Video Creators</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Communities</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Writers and Journalists </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Gaming Creators 
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                Tutorials and Education
              </NavDropdown.Item>
            </NavDropdown>



            <Nav.Link href="#action1">pricing</Nav.Link>



            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Creator Hub
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                App Directory
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Help Center & FAQ
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> 
            <Button  variant="primary" href='/login' >Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LandingNavbar; 