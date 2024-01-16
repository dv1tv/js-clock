import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(1)
  }, [count])
  console.log(2)
  return (
    <>
      <Clock/>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

export default App;
