import { useEffect, useState } from 'react'
import './App.css';
import Input from './components/input';
import axios from 'axios';
import Api from './components/Api';

function App() {

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse('Loading...');

    try {
      const res = await axios.post('http://localhost:3000/api/prompt', { prompt });
      setResponse(res.data.answer);
    } catch (err) {
      setResponse('Error fetching response.');
      console.error(err);
    }
  }
  return (
    <>
      <div style={{ padding: '2rem' }}>
      <h1>EcoFriend</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
    </>
  )
}
export default App
