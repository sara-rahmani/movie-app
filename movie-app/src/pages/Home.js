// Page Home

import { useEffect,useState } from "react";
import Movie from "../components/Movie";
import Filter from "../components/Filter";

import { appTitle } from "../globals/globalVariables";
import isFav from "../utilities/isFav";
import toWatch from "../utilities/toWatch";

import { useSelector } from "react-redux";

function Home() {
    const favs = useSelector((state) => state.favs.items);
    const toWatchs = useSelector((state) => state.laters.items);

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=7670191addb965f127d1f008467d109e&language=en-US&page=1";
const [popular, setPopular] = useState([]);
useEffect(() => {
    fetchPopular();
  }, []);
const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results.slice(0, 12));
  };
  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  return (
    <main>
      <section>
      <Filter  />
      <div className="movies">
        {popular.map((movie,i) => {
          return <Movie
           key={i}
           movie={movie}

           isFav={isFav(favs, null, movie.id)}
           toWatch={toWatch(toWatchs,null,movie.id)}
           />;
        })}
      </div>
      </section>
    </main>
  );
}

export default Home;
