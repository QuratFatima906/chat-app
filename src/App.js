
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("")
  return (
    <div className="App">
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button className="" >Send Message</button>
     
    </div>
  );
}

export default App;
