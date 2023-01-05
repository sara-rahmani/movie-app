// Page watch later
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import { appTitle } from "../globals/globalVariables";
import { useSelector } from "react-redux";
import isFav from "../utilities/isFav";

function WatchLater() {
  
    const favs = useSelector((state) => state.favs.items);

    const watchLater = useSelector((state) => state.laters.items);

    useEffect(() => {
      document.title = `${appTitle} - Favs`;
    }, []);
  
    return (
      <main className="laters">
        <section>
          <h2>Watch later Movies</h2>
          {watchLater.length < 1 ? (
            <p>
              No watch Later Movie. Return to the <Link to="/">home</Link> page
              to add some watch Later Movies.
            </p>
          ) : (
            <div className="movies">
              {watchLater.map((movie, i) => {
                return (
                  <Movie
                    key={i}
                    movie={movie}
                    isFav={isFav(favs, null, movie.id)}
                    toWatch={true}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>
    );
  }
  
  export default WatchLater;
  