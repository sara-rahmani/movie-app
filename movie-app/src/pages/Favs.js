// Page Favs
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import { appTitle } from "../globals/globalVariables";
import { useSelector } from "react-redux";
import toWatch from "../utilities/toWatch";

function Favs() {
  const favs = useSelector((state) => state.favs.items);
  const watchLater = useSelector((state) => state.laters.items);

  useEffect(() => {
    document.title = `${appTitle} - Favs`;
  }, []);

  return (
    <main className="favs">
    <section>
        <h2>Favourite Movies</h2>
        {favs.length < 1 ? (
          <p>
            No favourite Movie. Return to the <Link to="/">home</Link> page
            to add some favourite Movies.
          </p>
        ) : (
          <div className="movies">
            {favs.map((movie, i) => {
              return (
                <Movie
                  key={i}
                  movie={movie}
                  isFav={true}
                  toWatch={toWatch(watchLater,null,movie.id)}

                />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default Favs;
