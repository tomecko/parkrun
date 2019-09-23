import React from 'react';
import barcodeReader from 'javascript-barcode-reader';

import './App.css';
import { Camera } from './components';

function App() {
  return (
    <div>
      <header>Parkrun</header>
      <Camera onCapture={x =>
        console.log('onC', barcodeReader(x, { barcode: 'code-2of5' }).then(x => console.log(x)))} />
      <div>records</div>
      <div>actions</div>
    </div>
  );
}

export default App;
