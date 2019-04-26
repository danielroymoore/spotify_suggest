import React, { Fragment } from 'react';

import { ArtistSearch, UserProfile } from "./components";
import { useSpotifyAuth } from './hooks';

function App() {

  const token = useSpotifyAuth();

  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to Spotify Suggest</h2>
      </div>

      {token === null ? <div>Loading</div> : 
        <Fragment>      
          <UserProfile token={token}/>
          <ArtistSearch />
        </Fragment>
      }
    </div>
  );
}



export default App;
