// Fav Button
const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function LaterButton({ characterObj, remove, handleToWatchClick }) {
  function handleAddToWatch() {
    handleToWatchClick(true, characterObj);
  }

  function handleRemoveToWatch() {
    handleToWatchClick(false, characterObj);
  }

  return (
    <>
      {remove === false ? (
        <button title="Add to your Watch Later Movies!" onClick={handleAddToWatch}>     
          <img src={`${imageFolderPath}add-later1.png`} alt="Save" />
   
        </button>
      ) : (
        <button title="Remove from your Watch Later Movies!" onClick={handleRemoveToWatch}><img src={`${imageFolderPath}remove-later1.png`} alt="Save" />
        </button>
      )}
    </>
  );
}

LaterButton.defaultProps = {
  remove: false,
};

export default LaterButton;
