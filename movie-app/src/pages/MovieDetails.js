// Page Char
import { useEffect,useState } from "react";
import { useParams, Link } from "react-router-dom";
import Movie from "../components/Movie";
import { appTitle } from "../globals/globalVariables";
import isFav from "../utilities/isFav";
import { useSelector } from "react-redux";
import toWatch from "../utilities/toWatch";

function MovieDetails() {
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
    const favs = useSelector((state) => state.favs.items);
    const toWatchs = useSelector((state) => state.laters.items);

    const { id } = useParams();
    // Next line uses "==" instead of "===" because the URL parameter
    // comes back as a string and we just want to test for value and
    // not value and data type...
    // Using a "==" operator means that
    // "1" == 1 returns true...
    // [someArray].find() returns the first matched item if a matched
    // item is found, otherwise it returns undefined...
    const movieObj = popular.find(
      (movie) => String(movie.id) === id
    );
  
    useEffect(() => {
      if (!movieObj) {
        document.title = `${appTitle} - Character Profile`;
      } else {
        document.title = `${appTitle} - Character Profile: ${movieObj.name}`;
      }
    }, [movieObj]);

    return (
      <main>
          <h2>MovieDetails</h2>
          <div className="details">

          {!movieObj ? (
          <p>
            Character not found. <Link to="/">Return to home page</Link>.
          </p>
        ) : (
            
            <Movie
              movie={movieObj}
              profileLink={false}
              isFav={isFav(favs, null, movieObj.id)}
              toWatch={toWatch(toWatchs,null,movieObj.id)}

            />
        )}</div>
      </main>
    );
  }
  
  export default MovieDetails;
  