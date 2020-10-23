import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOrigianls} />
      <Row
        titile="Netflix Originals"
        fetchUrl={requests.fetchNetflixOrigianls}
        isLargeRow
      />
      <Row titile="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row titile="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row titile="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row titile="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row titile="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row titile="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row titile="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
