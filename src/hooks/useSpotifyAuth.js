import { useState, useEffect } from "react";
import { navigate } from "@reach/router";

export default function useSpotifyAuth() {
  
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_auth_token');
    const parsedToken = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if(storedToken !== null) {
      setToken(storedToken);
    } else {
      if(parsedToken === undefined) {
        authFromSpotify();
      } else {
        localStorage.setItem('spotify_auth_token', parsedToken);
        setToken(parsedToken);
      }
    }

  }, []);

  function authFromSpotify() {
    let authUrl = `https://accounts.spotify.com/authorize?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&redirect_uri=${
      process.env.REACT_APP_SPOTIFY_CALLBACK
    }&response_type=token`;

    navigate(authUrl);
  };

  return token;
}
