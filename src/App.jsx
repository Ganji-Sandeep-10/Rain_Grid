import React from 'react';
import Grid from './components/Grid';
import { useRainEffect } from './hooks/useRainEffect';
import { styles } from './styles/styles';

const GRID_ROWS = 15;
const GRID_COLS = 20;

const App = () => {
  const grid = useRainEffect(GRID_ROWS, GRID_COLS);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Rain Grid Animation</h1>
      <Grid grid={grid} />
      <footer style={styles.footer}>
        Dynamic Rain Effect | React Grid Animation
      </footer>
    </div>
  );
};

export default App;
