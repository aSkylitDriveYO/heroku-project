import { useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
