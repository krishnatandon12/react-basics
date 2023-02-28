import React from 'react';
import Heading from './Heading';
import './style.css';

export default function App() {
  const calculate = (x, y) => x * y;

  const getSetObject = (name, age = 10) => ({ type: 'SET_NAME', name, age });

  const getParagraph = () => <p>Krishna</p>;

  return (
    <div>
      <Heading title="Functions returning Numeric values" />
      <p>
        <span style={{ fontSize: '24px', fontWeight: '700', display: 'block' }}>
          Result = {calculate(12, 8)}
        </span>
      </p>

      <Heading title="Functions returning Objects" />
      <p>
        <span style={{ fontSize: '24px', fontWeight: '900', display: 'block' }}>
          Result = {JSON.stringify(getSetObject('Krishna', 12))}
        </span>
      </p>

      <Heading title="Functions returning Views" />
      <p>
        <span style={{ fontSize: '24px', fontWeight: '900', display: 'block' }}>
          Result = {getParagraph()}
        </span>
      </p>
    </div>
  );
}
