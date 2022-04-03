import React from "react";
// import { useEffect, useState } from "react";
// function displayNews(data) {
//     const news=data.articles[0]
// }
import NewsCard from "./Card";
import "./Display.css";
const Display = ({ news }) => {
  // const [filter, setFilter] = useState({
  //   category: "",
  // });
  // const [news, setNews] = useState();

  // const updateFilter = () => {
  //   const val = document.getElementById("search").value;
  //   setFilter({
  //     category: val,
  //   });
  // };
  // const fetchData = () => {
  //   fetch(endpoint + filter.category)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // displayNews(data);
  //       setNews(data);
  //       for (let i = 0; i < 5; i++) {
  //         console.log(data.articles[i].title);
  //         console.log(data.articles[i].author);
  //         console.log(data.articles[i].source.name);
  //         console.log(data.articles[i].publishedAt);
  //         console.log(data.articles[i].url);
  //       }
  //     });
  // };
  // const endpoint =
  //   "https://newsapi.org/v2/everything?apiKey=894c5d501fcc4663bf838ad0744060ab&q=";
  // useEffect(() => {
  //   fetchData();
  // }, [filter]);

  return (
    <div className="news">
      {news.map((Item) => (
        <NewsCard Item={Item} key={Item.title} />
      ))}
    </div>
  );
};

export default Display;
