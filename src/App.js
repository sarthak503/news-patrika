import "./App.css";

import { useEffect, useState } from "react";
import Header from "./component/Header";
import Display from "./component/Display";
import Footer from "./component/Footer";
function App() {
  const [filter, setFilter] = useState({
    category: "keyword",
  });
  const [news, setNews] = useState([]);

  const updateFilter = () => {
    const val = document.getElementById("search").value;
    setFilter({
      category: val,
    });
    console.log(val);
    fetchData();
  };
  const fetchData = () => {
    console.log("cscsd");
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
      <Header updateFilter={updateFilter} />
      {news && <Display news={news} />}
      <Footer />
    </div>
  );
}

export default App;
