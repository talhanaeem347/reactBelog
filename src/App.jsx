import Home from './views/Home';
import NavBar from './components/NavBar';
import BlogView from './views/BlogView';
import NewBlog from './views/NewBlog';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className='h-12'>
          <div className='fixed z-20 h-12'>
            <NavBar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/new" element={<NewBlog />} />
        </Routes>
      </Router>



    </div>
  );
}
export default App;