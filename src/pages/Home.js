import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const movieCards = movies.map((movie) => {
    return (
      <MovieCard key={movie.id} id={movie.id} title={movie.title} />
    );
  });

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {/* Info goes here! */}
        {movieCards}
      </main>
    </>
  );
};

export default Home;