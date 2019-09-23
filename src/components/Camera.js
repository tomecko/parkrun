import React, { useEffect, useRef, useState } from 'react';
import pixels from 'image-pixels';

const CAPTURE_INTERVAL = 1000;

function onGetUserMediaButtonClick(videoEl, setImageCapture) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(mediaStream => {
      videoEl.srcObject = mediaStream;
      const track = mediaStream.getVideoTracks()[0];
      setImageCapture(new ImageCapture(track));
    })
    .catch(error => console.error(error));
}

export function Camera({ onCapture }) {
  const [imageCapture, setImageCapture] = useState(null);
  const videoRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (imageCapture) {
        imageCapture.grabFrame()
          .then(pixels)
          .then(onCapture);
      }
    }, CAPTURE_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      {imageCapture ? null : (
        <button
          onClick={() => onGetUserMediaButtonClick(videoRef.current, setImageCapture)}
        >
          grab user media!
        </button>
      )}
      <video autoPlay ref={videoRef}></video>
    </div>
  );
}

