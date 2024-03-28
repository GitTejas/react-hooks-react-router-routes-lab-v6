import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(setDirectors)
  })

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <h1> Directors Page </h1>
      <main>
        {directors.map(director => <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {/* {director.movies} */}
            <li>{director.movies[0]}</li>
            <li>{director.movies[1]}</li>
            <li>{director.movies[2]}</li>
          </ul>
        </article>)}
      </main>
    </>
  );
};

export default Directors;
