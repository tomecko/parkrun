import React from 'react';

export function Records({ records }) {
  return (
    <div>
      <h6>Detected 830</h6>
      <ul>
        {records.reverse().map((record, i) => (
          <li key={i}>
            {record.added.getHours()}:{record.added.getMinutes()}:{record.added.getSeconds()}
            |
            {record.code}
          </li>
        ))}
      </ul>
    </div>
  )
}
