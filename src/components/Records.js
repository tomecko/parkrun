import React from 'react';

export function Records({ records }) {
  return (
    <div>
      <h2>Detected</h2>
      <ul>
        {records.map((record, i) => (
          <li key={i}>{record}</li>
        ))}
      </ul>
    </div>
  )
}
