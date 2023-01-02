import React from 'react';
import './style.css';

export default function App() {
  const calculate = (x, y) => x * y;
  return (
    <div>
      <h1 style={{ textDecoration: 'double underline' }}>
        Functions returning Numeric values
      </h1>
      <p>
        <span style={{ fontSize: '24px', fontWeight: '900', display: 'block' }}>
          Result = {calculate(12, 8)}
        </span>
      </p>
    </div>
  );
}
