import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, [])

  const articles = actors.map((actor) => {
    const movieTags = actor.movies.map((movie) => <li key={movie}>{movie}</li>);
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {movieTags}
        </ul>
      </article>
    );
  });

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {articles}
      </main>
    </>
  );
};

export default Actors;