import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>netflix clone</h1>
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
