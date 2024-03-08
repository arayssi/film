import React ,{useState} from "react";
import {Button, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddMovie from "../AddMovie/AddMovie";

const NavBar = ({setRatingChange, setSerchInput, ratingChange, newMovie, setNewMovie,handleSave}) => {
  const ratingChanged = (rating) => {
    setRatingChange(rating);
  };
  const handlChange = (e) =>{
    setSerchInput(e.target.value);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Navbar bg="dark align-items-baseline" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button variant="light" onClick={handleShow}>  Add new movie</Button>{' '}
          </Nav>
        </Container>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         search
        </InputGroup.Text>
        <Form.Control
        onChange={handlChange}
          aria-label="default"
          aria-describedby="inputGroup-sizing-default"
        />
           <ReactStars
    count={5}
    value={ratingChange}
    onchange ={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
    </InputGroup> { " " }
   </Navbar>
   <AddMovie show={show} handleClose={handleClose} newMovie={newMovie} setNewMovie={setNewMovie} handleSave={handleSave} setShow={setShow}/>
    </div>
  );
};

export default NavBar;