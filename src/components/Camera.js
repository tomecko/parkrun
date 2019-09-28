import React, { useEffect } from 'react';
import Quagga from 'quagga';
import { css } from 'emotion';

export function Camera({ onDetected }) {
  useEffect(() => {
    console.log('useEffect');
    Quagga.init({
      numOfWorkers: window.navigator.hardwareConcurrency || 2,
      locate: true,
      locator: {
          patchSize: "medium",
          halfSample: false,
      },
      frequency: 10,
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#scanner'),
        area: {
          top: "40%",
          bottom: "40%",
          left: "0%",
          right: "0%",
        },
        width: {
            min: 1100,
        },
        height: {
            min: 800,
        },
        aspectRatio: {
            min: 1,
            max: 2,
        },
      },
      decoder : {
        readers : ["code_128_reader"],
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true
        },
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
          onDetected(data.codeResult.code.trim());
        });
    });
  }, []);

  return (
    <div
      id="scanner"
      onClick={() => onDetected('A000')}
      className={css`
        background: #222;
        display: flex;
        justify-content: center;
        max-height: 50vh;
        width: 100vw;
        position: relative;
        & canvas {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          max-height: 100%;
          max-width: 100%;
        }
      `}
    ></div>
  );
}

