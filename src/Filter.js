// Filter.js
import React from 'react';

const Filter = ({ onTitleChange, onRateChange }) => {
  return (
    <div>
    <input
      type="text"
      className="form-control"
      placeholder="Filter by title"
      onChange={onTitleChange}
      style={{ marginBottom: '10px', marginTop: '30px' }}
    />
    <input
      type="number"
      className="form-control"
      placeholder="Filter by rating"
      onChange={onRateChange}
      style={{ marginBottom: '30px', marginTop: '20px' }}
    />
  </div>
  );
};

export default Filter;
