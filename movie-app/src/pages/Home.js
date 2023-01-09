// Page Home
import { useCallback } from 'react';
import { useEffect,useState } from "react";
import Movie from "../components/Movie";
import Filter from "../components/Filter";

import isFav from "../utilities/isFav";
import toWatch from "../utilities/toWatch";

import { useSelector } from "react-redux";

function Home() {
    const favs = useSelector((state) => state.favs.items);
    const toWatchs = useSelector((state) => state.laters.items);

const [movies, setMovies] = useState([]);
const [activeList,setActiveList]=useState('popular');
const url =
     `https://api.themoviedb.org/3/movie/${activeList}?api_key=7670191addb965f127d1f008467d109e&language=en-US&page=1`;

     const fetchPopular = useCallback(async () => {
      console.log(url);
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setMovies(movies.results.slice(0, 12));
    }, [url])
    
    useEffect(() => {
        fetchPopular();
      }, [fetchPopular]);


  return (
    <main>
      <section>
      <Filter  activeList={activeList} setActiveList={setActiveList} />
      <div className="movies">
        {movies.map((movie,i) => {
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
