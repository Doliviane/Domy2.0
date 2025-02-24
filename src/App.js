
import React from 'react';
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LogIn from './connect/connect';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="App-header">
        
       
        <h1>Bienvenue sur mon site</h1>
       
       
      </header>
      
<p>
<Link to="/connect" id="log-in">Log in</Link>
</p>
<Routes>
          <Route path="/connect" element={<LogIn />} />
        </Routes>
    </div>
    
    </BrowserRouter> );
}



export default App;
