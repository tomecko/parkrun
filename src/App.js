import React from 'react';

import './App.css';
import { Camera } from './components';

function App() {
  return (
    <div>
      <header>Parkrun</header>
      <Camera />
      <div>records</div>
      <div>actions</div>
    </div>
  );
}

export default App;
