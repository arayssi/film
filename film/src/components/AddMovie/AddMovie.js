import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
const AddMovie = ({
  show,
  handleClose,
  newMovie,
  setNewMovie,
  handleSave,
  setShow,
}) => {
  const handlChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };
  console.log(newMovie);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Put your title"
              onChange={handlChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="Description"
              rows={3}
              onChange={handlChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Poster Url</Form.Label>
            <Form.Control
              type="text"
              name="posterUrl"
              placeholder="Put your poster Url"
              onChange={handlChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              placeholder="Put your rating"
              onChange={handlChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSave(newMovie);
            setShow(false);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMovie;
