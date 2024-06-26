import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(setActors)
  })

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => 
          <article key={actor.id}>
            <h2>{actor.name}</h2> 
            <ul>
              <li>{actor.movies[0]}</li>
              <li>{actor.movies[1]}</li>
              <li>{actor.movies[2]}</li>
            </ul>
          
          </article>
        )}
      </main>
    </>
  );
};

export default Actors;
