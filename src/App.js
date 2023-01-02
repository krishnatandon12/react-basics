import React from 'react';
import './style.css';

export default function App() {
  const getText = (name) => `My name is ${name}`;
  return (
    <div>
      <h1 style={{ textDecoration: 'double underline' }}>
        Functions returning String values
      </h1>
      <p>
        <span style={{ fontSize: '24px', fontWeight: '900', display: 'block' }}>
          {getText('Krishna')}
        </span>
      </p>
    </div>
  );
}
