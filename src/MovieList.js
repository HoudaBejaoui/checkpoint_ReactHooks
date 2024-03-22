// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const movieListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Adjust the minimum and maximum width as needed
    gap: '16px',
    padding: '30px',
  };
  
  return (
    <div className="movie-list " style={movieListStyle}>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
