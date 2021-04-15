import React from 'react';
import './App.css';
import Playbar from './components/playbar/Playbar';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar';

function App() {
  return (
    <div className="AppBody">
      <div className="GridComponent">
        <Header />

        <div className="section1">
          {/* The Main Component GoHere */}
          <Carousel />
        </div>

        <div className="section2">
          <div className="PlaylistComponent">{/* PlaylistComponent GoHere */} </div>

          <div className="section2Left">
            <div className="vignettes">
              <div className="vignette1">{/* ArtistComponent GoHere */} </div>
              <div className="vignette2">{/* AlbumComponent GoHere */} </div>
            </div>

            <div className="MixtapesComponent">{/* MixtapesComponent GoHere */}</div>
          </div>
        </div>

        <div className="ContactForm">{/* ContactFormComponent GoHere */} </div>
      </div>

      <Playbar />
      <SideBar />
    </div>
  );
}

export default App;
