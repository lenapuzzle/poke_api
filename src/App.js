import React, { useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon.js';

function App() {
  const [pokeNames, setPokeNames] = useState([]);
  return (
    <div className="App">
      <Pokemon pokeNames={pokeNames} setPokeNames={setPokeNames} />
    </div>
  );
}

export default App;
