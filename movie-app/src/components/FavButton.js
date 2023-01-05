// Fav Button
const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function FavButton({ characterObj, remove, handleFavClick }) {
  function handleAddFav() {
    handleFavClick(true, characterObj);
  }

  function handleRemoveFav() {
    handleFavClick(false, characterObj);
  }

  return (
    <>
      {remove === false ? (
        <button title="Add to your Favourite Movies!" onClick={handleAddFav}>     
          <img src={`${imageFolderPath}add-fav1.png`} alt="Heart" />
   
        </button>
      ) : (
        <button title="Remove from your Favourite Movies!" onClick={handleRemoveFav}><img src={`${imageFolderPath}remove-fav1.png`} alt="Heart" />
        </button>
      )}
    </>
  );
}

FavButton.defaultProps = {
  remove: false,
};

export default FavButton;
