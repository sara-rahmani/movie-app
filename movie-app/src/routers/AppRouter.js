// App Router

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import WatchLater from "../pages/WatchLater.js";
import Favs from "../pages/Favs";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import { appTitle, appAuthor } from "../globals/globalVariables";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header title={appTitle} />
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/movies/:id"
            element={<MovieDetails />}
          />
     <Route path="/about" element={<About />} />

          <Route path="/favs" element={<Favs />} />
          <Route path="/watchLater" element={<WatchLater />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer author={appAuthor} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
