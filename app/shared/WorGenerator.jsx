'use client';
import { useEffect, useState } from 'react';

const names = ['misha', 'rona', 'shaun', 'consta'];

const NameGenerator = () => {
  const [name, setName] = useState('no name');

  const generateRandomName = () => {
    let newName = names[Math.floor(Math.random() * names.length)];
    if (name === newName) {
      let newName = names[Math.floor(Math.random() * names.length)];
    }
    setName(newName);
  };

  useEffect(() => {
    //generateRandomName();
  }, []);
  return (
    <div>
      <p>React new Server Components using &quot;use client&quot;</p>
      <button onClick={generateRandomName}>Generate random names</button>
      <div>{name ? name : 'click to generate name'}</div>
    </div>
  );
};

export default NameGenerator;
