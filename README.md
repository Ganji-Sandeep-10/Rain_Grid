# Rain Grid

A dynamic and visually engaging rainfall simulation over a grid using React.

## Live Demo

👉 [View Live](https://rain-grid.onrender.com)

## Overview

Rain Grid is an animated web application that simulates rain droplets falling across a grid. The application visually models raindrops as colored trails that fall smoothly down the grid, dynamically changing colors to create a vibrant rain effect.

## Features

* Dynamic rain animation with random colors.
* Smooth fade-out trail for raindrops.
* Customizable grid size.
* Minimalistic, responsive design.
* Built using React hooks and CSS-in-JS for clean and efficient UI updates.

## High-Level Approach

1. **Grid Structure**:

   * The grid is modeled as a 2D array of cells.
   * Each cell updates its color based on the presence and progression of a raindrop.

2. **Rain Animation**:

   * Raindrops are represented as objects with a position and movement speed.
   * Drops have a tail effect, with the opacity decreasing gradually.
   * The number of active drops is regulated to ensure smooth performance.

3. **Color Dynamics**:

   * Each drop uses a randomly generated color.
   * Colors are updated every few seconds to enhance visual dynamism.

4. **React Implementation**:

   * `useRainEffect` custom hook manages the grid's state and animation logic.
   * `Grid` and `Cell` components render the visual grid and individual cells.
   * Inline styles handle layout and transitions for simplicity and performance.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ganji-Sandeep-10/Rain_Grid.git
   cd Rain_Grid
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

## Project Structure

* `App.jsx` - Main application component.
* `Grid.jsx` - Renders the grid layout.
* `Cell.jsx` - Represents individual grid cells.
* `useRainEffect.js` - Custom hook managing rain logic.
* `gridUtils.js` - Utility functions for grid management.
* `styles.js` - Centralized style definitions.
* `main.jsx` - Application entry point.

## Technologies Used

* React
* JavaScript (ES6+)
* CSS-in-JS (inline styling)

## License

This project is licensed under the MIT License.

---

Created with ❤️ by Sandeep Ganji.
