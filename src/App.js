import React from 'react';
import './style.css';

export default function App() {
  const someText = 'I am some interpolated text';
  const someClassName = 'interpolated-class-name';
  const someMoreText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
  mollitia, molestiae quas vel sint commodi repudiandae consequuntur
  voluptatum laborum numquam blanditiis harum quisquam eius sed odit
  fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
  accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
  molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
  officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
  nesciunt ipsum debitis quas aliquid.`;

  return (
    <div>
      <h1>Interpolation in React</h1>
      <h2 className={someClassName}>{someText}</h2>
      <p>{someMoreText}</p>
    </div>
  );
}
