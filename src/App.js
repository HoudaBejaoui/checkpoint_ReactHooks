import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovie';
import moviesData from './data_movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleHideAddModal = () => {
    setShowAddModal(false);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (!ratingFilter || movie.rate === parseInt(ratingFilter))
  );

  return (
    <div className="app">
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="mx-auto" href="#">
          Welcome to your favorite Movie App
        </Navbar.Brand>
      </Navbar>

      {/* Content */}
      <div className="container">
        <Filter onTitleChange={handleTitleChange} onRateChange={handleRatingChange} />
        <Button variant="primary" onClick={handleShowAddModal} style={{ marginBottom: '10px' }}>
          Add Movie
        </Button>
        <MovieList movies={filteredMovies} />
        <AddMovieForm show={showAddModal} onHide={handleHideAddModal} onAddMovie={handleAddMovie} />
      </div>
    </div>
  );
};

export default App;
