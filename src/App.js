import React from 'react';
import './style.css';

export default function App() {
  const someText = 'I am some interpolated text';
  const someClassName = 'interpolated-class-name';

  return (
    <div>
      <h1>Interpolation in React</h1>
      <p className={someClassName}>{someText}</p>
    </div>
  );
}
