import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, watchlist, toggleWatchlist }) {
  // const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  // useEffect(() => {
  //   fetch("movies.json")
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data));
  // }, []);

  const handleSearchChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChanges = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChanges = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    // return (
    //   rating === "All" ||
    //   (rating === "Good"
    //     ? movie.rating >= 8
    //     : rating === "Bad"
    //       ? movie.rating < 5
    //       : movie.rating > 5 && movie.rating < 8)
    // );
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating > 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filterMovie = movies.filter(
    // (movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    (movie) =>
      // matchesGenre(movie, genre) && matchesSearchTerm(movie, searchTerm)
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies ..."
        value={searchTerm}
        onChange={handleSearchChanges}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChanges}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horor</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChanges}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {/* <h1>{movies.length}</h1> */}
        {filterMovie.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );

  // show books in list
  // const [books, setBooks] = useState([]);

  // useEffect(()=> {
  //     const m = ["a","b","c"]
  //     setBooks(m);
  // },[])

  // return(
  //         <ul>
  //             {
  //                 books.map(book => (
  //                     <li key={book}>{book}</li>
  //                 ))
  //             }
  //         </ul>
  // )
}
