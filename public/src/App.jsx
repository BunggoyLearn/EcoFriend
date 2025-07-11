import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import TextPrompt from './components/TextPrompt';
import ImageURL from './components/ImageURL';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'> TextPrompt </Link>
        <Link to='/images'> ImageURL </Link>
      </nav>

      <Routes>
        <Route path='/' element={<TextPrompt/>} />
        <Route path='/images' element={<ImageURL/>} />
      </Routes>
      
    </Router>
  )
}
export default App
