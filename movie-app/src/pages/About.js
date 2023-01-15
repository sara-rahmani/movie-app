// Page Char

function About() {
  


  return (
    <main>
<div class="description">
    <h2>About the Project</h2>

<p>&#9758; The Movie-App is a Movie Database listing the moviesbased on popularity,
     rating, and release date. Browse for your favourite film, 
     add it to the Favourite List, and save it for the Watch Later list!</p>

  <p>&#9758; This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
  {/* <div class="tmdb-logo"></div> */}
  <img src={`tmdb-logo.png`} class="logo-img" alt="logo"/>

</div>          
    </main>
  );
}

export default About;
