import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Container.css";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";

function Mcontainer() {
  const fetchAp = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=238a670d`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favori, setFavori] = useState([]);

  const favorim = (movie) => {
    const favoriler = [...favori, movie];
    setFavori(favoriler);

    saveLocal(favoriler);
  };

  useEffect(() => {
    fetchAp(search);
  }, [search]);

  useEffect(() => {
    const favorifilm = JSON.parse(localStorage.getItem("react-movies"));

    if (favorifilm) {
      setFavori(favorifilm);
    }
  }, []);

  const saveLocal = (items) => {
    localStorage.setItem("react-movies", JSON.stringify(items));
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favori.filter(
      (favoriz) => favoriz.imdbID !== movie.imdbID
    );

    setFavori(newFavouriteList);
    saveLocal(newFavouriteList);
  };

  return (
    <div>
      <Header />
      <div className="ortam">
        <SearchBox search={search} setSearch={setSearch} />
        <h1>Movies</h1>
        <MovieList
          movies={movies}
          favori={favori}
          setFavori={setFavori}
          favorim={favorim}
        />
        <h1>My Favorites [SAVED IN LOCAL STORY]</h1>
        <MovieList movies={favori} favorim={removeFavouriteMovie} />
      </div>
    </div>
  );
}

export default Mcontainer;
