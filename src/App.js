import React, { useState } from 'react';
import { css } from 'emotion';

import { Camera, Records } from './components';
import { validateAthleteCode } from './validation';

function App() {
  const [detected, setDetected] = useState([]);
  const addDetected = code => {
    if (validateAthleteCode(code)) {
      setDetected(detected.concat(code));
    }
  }
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
