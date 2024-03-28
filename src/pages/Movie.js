import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

const [moviez, setMoviez] = useState({})
const params = useParams()
const movieId = params.id

useEffect(() => {
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then(r => r.json())
  .then(setMoviez)
}, [movieId])

if (!moviez.title){
  return <h1>Loading...</h1>
}

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>{moviez.title}</h1>
        <p>{moviez.time}</p>
        {moviez.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
