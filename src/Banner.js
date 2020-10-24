import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movies, setMovies] = useState([0]);

  function truncate(str, noOfCharacter) {
    return str?.length > noOfCharacter
      ? str.slice(0, noOfCharacter - 1) + "..."
      : str;
  }

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(fetchUrl);

      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
      return response;
    }
    fetchdata();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundPosition: `center `,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movies.original_name || movies.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description"> {truncate(movies.overview, 250)}</p>
      </div>
      <div className="banner--bottom--transition"></div>
    </div>
  );
}

export default Banner;
