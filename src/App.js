import React from 'react';
import { Navbar,Form , FormControl,Button, Nav,Jumbotron,Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="back" >
      
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">ReactApp</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
  <Jumbotron fluid className="jum1">
  <Container>
    <h1 >Welcome my lovers</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
  <div class="container">
  <Form>
  <Form.Group controlId="formBasicEmail">
  <Form.Label>FirstName</Form.Label>
  <Form.Control type="email" placeholder="Enter firstname" />
</Form.Group>
<Form.Group controlId="formBasicEmail">
  <Form.Label>LastName</Form.Label>
  <Form.Control type="email" placeholder="Enter lastname" />
</Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <center><Button variant="dark" type="submit">
    Submit
  </Button></center>
</Form>

</div>

    </div>
  );
}

export default App;
