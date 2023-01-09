import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavButton from "../components/FavButton";
import LaterButton from "../components/LaterButton";

import { addFav, deleteFav } from "../features/favs/favsSlice";
import { addToWatch, deleteToWatch } from "../features/laters/latersSlice";

//const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

const Movie = ({ movie, profileLink, isFav,toWatch }) => {
    const dispatch = useDispatch();
    const rating = ((movie.vote_average)  * 10).toFixed(2);
      function handleFavClick(addToFav, obj) {
      if (addToFav === true) {
        console.log(obj);
        dispatch(addFav(obj));
      } else {
        dispatch(deleteFav(obj));
      }
    }
    function handleToWatchClick(addWatch, obj) {
        if (addWatch === true) {
          console.log(obj);
          dispatch(addToWatch(obj));
        } else {
          dispatch(deleteToWatch(obj));
        }
      }
  
    return (
        <div className="movie">
     
      <div className="profile-picture">
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
      alt={movie.path} />

      </div>
     <div className="title-and-name">

      <h5>{movie.title}</h5>
      <p><b>Rating: </b> {rating}%</p>
     
        <p><b>Date Released: </b>{movie.release_date}</p>
    
        <p> <b>Description: </b>
              {movie.overview}</p>

              {profileLink && (   <div className="link-profile">

          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { movie },
            }}
          >
             More info &#8250;&#8250;
          </Link></div>
      )}
      
      </div>
      
      <div className="btn-favourite">
        {isFav ? (
          <FavButton
            characterObj={movie}
            remove={true}
            handleFavClick={handleFavClick}
          />
        ) : (
          <FavButton
            characterObj={movie}
            handleFavClick={handleFavClick}
          />
        )}
      </div>
      <div className="btn-later">

        { toWatch? (
          <LaterButton
            characterObj={movie}
            remove={true}
            handleToWatchClick={handleToWatchClick}
          />
        ) : (
          <LaterButton
            characterObj={movie}
            handleToWatchClick={handleToWatchClick}
          />
        )}
    </div></div>
    
  );
};
Movie.defaultProps = {
    profileLink: true,
  };
export default Movie;