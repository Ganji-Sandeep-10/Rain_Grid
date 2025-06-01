import { useEffect, useRef, useState } from 'react';
import { generateEmptyGrid, getRandomColor } from '../utils/gridUtils';

const DROP_LENGTH = 6;           // Length of each drop
const UPDATE_INTERVAL = 15;      // How often the grid updates (ms)
const DROP_SPEED = 2;            // How many rows each drop falls per update
const MAX_ACTIVE_DROPS = 10;     // Max simultaneous falling drops

export const useRainEffect = (rows, cols) => {
  const [grid, setGrid] = useState(generateEmptyGrid(rows, cols));
  const [drops, setDrops] = useState([]);
  const colorRef = useRef(getRandomColor());

  // 💡 Update color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      colorRef.current = getRandomColor();
    }, 2000); // every 1000 ms (1 second)

    return () => clearInterval(colorInterval);
  }, []);

  // 🌧 Update rain grid
  useEffect(() => {
    const interval = setInterval(() => {
      updateGrid();
    }, UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, [drops]);

  const updateGrid = () => {
    const newGrid = generateEmptyGrid(rows, cols);

    const activeDrops = drops.filter(drop => drop.start < rows + DROP_LENGTH);
    const newDrops = [];

    if (activeDrops.length < MAX_ACTIVE_DROPS) {
      const availableCols = Array.from({ length: cols }, (_, i) => i);
      shuffleArray(availableCols);

      for (let col of availableCols) {
        const nearbyDropExists = activeDrops.some(d => Math.abs(d.col - col) < 2);
        const alreadyChosen = newDrops.some(d => Math.abs(d.col - col) < 2);

        let spawnChance = 0.4;
        if (nearbyDropExists) spawnChance = 0.15;

        if (!alreadyChosen && Math.random() < spawnChance) {
          newDrops.push({ col, start: -DROP_LENGTH });
          break;
        }
      }
    }

    const updatedDrops = [...activeDrops, ...newDrops].map(drop => ({
      ...drop,
      start: drop.start + DROP_SPEED,
    }));

    for (let drop of updatedDrops) {
      for (let i = 0; i < DROP_LENGTH; i++) {
        const row = drop.start - i;
        if (row >= 0 && row < rows) {
          const opacity = 1 - i * 0.15;
          newGrid[row][drop.col] = `rgba(${colorRef.current
            .match(/\d+/g)
            .join(',')}, ${opacity.toFixed(2)})`;
        }
      }
    }

    setGrid(newGrid);
    setDrops(updatedDrops);
  };

  return grid;
};

// Shuffle helper
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}