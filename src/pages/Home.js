import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {

const [movies, setMovies] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/movies")
  .then(r => r.json())
  .then(setMovies)
})

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <h1>Home Page</h1>
      <main>
        {movies.map(movie => <MovieCard 
        movie={movie} 
        key={movie.id}
        />)}
      </main>
    </>
  );
};

export default Home;
