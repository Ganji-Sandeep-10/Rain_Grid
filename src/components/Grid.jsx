import React from 'react';
import Cell from './Cell';

const Grid = ({ grid }) => {
  const rows = grid.length;
  const cols = grid[0]?.length || 0;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '2px',
        width: '100%',
        maxWidth: '800px',
        aspectRatio: `${cols}/${rows}`,
      }}
    >
      {grid.flat().map((color, idx) => (
        <Cell key={idx} color={color} />
      ))}
    </div>
  );
};

export default Grid;
