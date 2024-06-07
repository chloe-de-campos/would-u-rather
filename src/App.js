// src/App.js
import React from 'react';
import {  HashRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Statistics from './components/Statistics';
import './App.css';
import initialQuestions from './data/initialQuestions.json'; 


function App() {

  return (

    
      <div className="App">
        <header>
          
        </header>
        <main>
        <Router>
          <Routes>
            <Route path="/" element={<Game questions={initialQuestions} />} />
            <Route path="/stats" element={<Statistics questions={initialQuestions} />} />
          </Routes>
          </Router>
        </main>
      </div>
    
  );
}

export default App;
