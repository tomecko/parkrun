import React, { useState } from 'react';
import { css } from 'emotion';

import './App.css';
import { Camera } from './components';
import { Records } from './components/Records';

function App() {
  const [detected, setDetected] = useState([]);
  const addDetected = val => setDetected(detected.concat(val));
  return (
    <div className={css`
      height: 100%;
    `}>
      <Camera onDetected={addDetected} />
      <Records records={detected} />
    </div>
  );
}

export default App;
