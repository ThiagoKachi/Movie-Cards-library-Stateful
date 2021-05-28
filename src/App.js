import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import moviesList from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ moviesList } />
    </div>
  );
}

export default App;
