import { useState } from 'react';
import axios from 'axios';

export default function ImageURL() {
  
  const [url, setURL] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse('Loading...');

    try {
      const res = await axios.post('http://localhost:3000/api/imageURL', { url });
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
          value={url}
          onChange={(e) => setURL(e.target.value)}
          placeholder="Enter your URL here..."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
        <strong>Response:</strong>
        <div>
            <img src={url} width='400' />
            <p>{response}</p>
        </div>
      </div>
    </div>
    </>
  );
}