<<<<<<< HEAD
import React from 'react';
import Header from './component/Header/header';
import './App.css';
import ActionAreaCard from './component/Card/card';

function App() {
  return (
    <div className="App">
      <Header/>
      <ActionAreaCard/>
    </div>
   
=======
import "./App.css";
import NewsCard from "./component/card";
import Footer from "./component/footer";
function App() {
  return (
    <div>
      <NewsCard />
      <Footer />
    </div>
>>>>>>> ba22029 (added footer and display file)
  );
}

export default App;
