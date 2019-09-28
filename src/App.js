import React, { useState } from 'react';
import { css } from 'emotion';

import { Camera, Records } from './components';
import { validateCode } from './validation';

function App() {
  const [detected, setDetected] = useState([]);
  const addDetected = code => {
    if (validateCode('A')(code) || validateCode('P')(code)) {
      setDetected(val => val.concat({
        code,
        added: new Date(),
      }));
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
