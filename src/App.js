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
    fetchData(val);
  };

  var axios = require("axios").default;
  const fetchData = (valv) => {
    var options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: { q: valv, lang: "en", sort_by: "relevancy", page: "1" },
      headers: {
        "x-api-key": "b0TIN0zLo9rikvLnMasrB5LrF3jSeBOxWCS7Xc-S7_o",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNews(response.data.articles);
        console.log(response.data.articles[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const fetchData = () => {
  //   console.log("cscsd");
  //   fetch(endpoint + filter.category)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // displayNews(data);
  //       setNews(data.articles);
  //       //setNews(data.results);
  //     });
  // };
  // const endpoint =
  //   "https://newsapi.org/v2/everything?apiKey=894c5d501fcc4663bf838ad0744060ab&q=";
  // const endpoint =
  //   "https://newsdata.io/api/1/news?apikey=pub_9321604861019c774eb037c57f35923e0be0&language=en&q=";
  // const endpoint =
  //   "https://api.newscatcherapi.com/v2/search?x-api-key:b0TIN0zLo9rikvLnMasrB5LrF3jSeBOxWCS7Xc-S7_o&q=";
  // useEffect(() => {
  //   fetchData();
  // }, [filter]);

  return (
    <div className="App">
      <Header updateFilter={updateFilter} />
      {news && <Display news={news} />}
      <Footer />
    </div>
  );
}

export default App;
