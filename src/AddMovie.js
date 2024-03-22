// AddMovieForm.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddMovie = ({ show, onHide, onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rate: '' });

  const handleAddMovie = () => {
    onAddMovie(newMovie);
    onHide();
    setNewMovie({ title: '', description: '', posterURL: '', rate: '' });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={newMovie.title}
              onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={newMovie.description}
              onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formPosterURL">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter poster URL"
              value={newMovie.posterURL}
              onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formRating">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rating"
              value={newMovie.rate}
              onChange={(e) => setNewMovie({ ...newMovie, rate: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddMovie}>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMovie;
