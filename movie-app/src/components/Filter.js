
const Filter = ({  activeList, setActiveList }) => {
    

  
return (
    <div className="filter-container">
      <button          onClick={() => setActiveList('popular')}

        className={activeList === "popular" ? "active" : ""}
      >
        Popular
      </button>
      <button
             onClick={() => setActiveList('top_rated')}
             className={activeList === "top_rated" ? "active" : ""}


      >
        Top Rated
      </button>
      <button
        onClick={() => setActiveList('now_playing')}
        className={activeList === "now_playing" ? "active" : ""}

      >
        Now Playing
      </button>
      <button
          onClick={() => setActiveList('upcoming')}
              className={activeList === "upcoming" ? "active" : ""}
      >
Upcoming      </button>
      
    </div>
  );
};
export default Filter;