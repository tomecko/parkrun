import React from 'react';

export function Records({ records }) {
  return (
    <div>
      <h2>Detected</h2>
      <ul>
        {records.map((val, i) => (
          <li key={i}>{val.codeResult.code}</li>
        ))}
      </ul>
    </div>
  )
}
