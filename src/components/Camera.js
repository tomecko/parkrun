import React, { useEffect, useState } from 'react';
import Quagga from 'quagga';
import { css } from 'emotion';

export function Camera() {
  const [detected, setDetected] = useState([]);
  const addDetected = val => setDetected(detected.concat(val));

  useEffect(() => {
    console.log('useEffect');
    Quagga.init({
      numOfWorkers: 2,
      locate: true,
      locator: {
          patchSize: "small",
          halfSample: false,
      },
      frequency: 5,
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#scanner'),
      },
      decoder : {
        readers : ["code_128_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
        Quagga.onProcessed((result) => {
          console.log('onProcessed');
          var drawingCtx = Quagga.canvas.ctx.overlay,
              drawingCanvas = Quagga.canvas.dom.overlay;

          if (result) {
              if (result.boxes) {
                  drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                  result.boxes.filter(function (box) {
                      return box !== result.box;
                  }).forEach(function (box) {
                      Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                  });
              }

              if (result.box) {
                  Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
              }

              if (result.codeResult && result.codeResult.code) {
                  Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
              }
          }
        });
        Quagga.onDetected(data => {
          console.log('onDetected', data);
          addDetected(data);
        });
    });
  }, []);

  return (
    <div>
      <div
        id="scanner"
        className={css`
          & canvas {
            position: absolute;
            top: 0;
            left: 0;
          }
        `}
      ></div>
      <h2>Detected</h2>
      <ul>
        {detected.map((val, i) => (
          <li key={i}>{val.codeResult.code}</li>
        ))}
      </ul>
    </div>
  );
}

