import { useEffect } from 'react'
import './App.css';
import Input from './components/input';
import axios from 'axios';

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/api");
    return(response.data.fruits);
  };

  let data = fetchAPI();

  console.log(data);

  useEffect( () => {
    fetchAPI();
  }, [])

  return (
    <div>
      {(typeof data === 'undefined') ? (
        <p> Loading... </p>
      ): (
        <Input/>
      )}

    </div>
  )
}

export default App
