import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ titile, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const otps = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(trailerUrl);

  function showTrailer(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie || "", { id: true })
        .then((response) => {
          setTrailerUrl(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="row">
      <h2> {titile}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={`${movie.id}`}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => {
                console.log(movie);

                showTrailer(
                  movie?.name || movie?.title || movie?.original_name
                );
              }}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={otps} />}
    </div>
  );
}

export default Row;
