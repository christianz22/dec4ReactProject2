import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './recipe';
import { BrowserRouter as Router, Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
import Header from './Header';
// import GetDetails from './GetDetails';
// import Favorites from './Favorites';
import FavoritesList from './FavoritesList';
import Footer from './Footer';

function App() {

  // const context = useContext(FavoritesContext);
  // console.log(context.favorites);

  return (
    <Router>
    <div className="App">
      <Header />
      
        <Routes>
          <Route path='/' element={<Recipe />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path='/dec4ReactProject2/' element={<Recipe />} />
          <Route path="/dec4ReactProject2/favorites" element={<FavoritesList />} />
        </Routes>

      {/* <Footer /> */}

    </div>
    
    </Router>
  );
}

export default App;