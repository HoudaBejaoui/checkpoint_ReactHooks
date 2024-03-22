// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    borderRadius: '8px',
    marginBottom: '10px',
    width: '200px',
    height: '300px',
  };

  return (
    <div style={cardStyle}>
      <img src={movie.posterUrl} alt={movie.title} style={imageStyle} />
      <h4 style={{textAlign:"center"}}>{movie.title}</h4>
      <p style={{fontSize:"15px"}}>{movie.description}</p>
      <p style={{fontWeight:"bold", fontSize:"12px"}}>Rating: {movie.rate}</p>
    </div>
  );
};

export default MovieCard;
