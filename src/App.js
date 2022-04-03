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

import { useEffect, useState } from "react";
import Display from "./component/Display";
import Footer from "./component/Footer";
function App() {
  const [filter, setFilter] = useState({
    category: "bitcoin",
  });
  const [news, setNews] = useState([]);

  const updateFilter = () => {
    const val = document.getElementById("search").value;
    setFilter({
      category: val,
    });
  };
  const fetchData = () => {
    fetch(endpoint + filter.category)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // displayNews(data);
        setNews(data.articles);
      });
  };
  const endpoint =
    "https://newsapi.org/v2/everything?apiKey=894c5d501fcc4663bf838ad0744060ab&q=";
  useEffect(() => {
    fetchData();
  }, [filter]);

  return (
    <div className="App">
      {news && <Display news={news} />}
      <Footer />
    </div>
>>>>>>> ba22029 (added footer and display file)
  );
}

export default App;
