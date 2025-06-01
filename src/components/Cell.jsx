import React from 'react';

const Cell = ({ color }) => {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '100%',
        backgroundColor: color || '#111',
        transition: 'background-color 0.2s ease-out',
      }}
    />
  );
};

export default Cell;
