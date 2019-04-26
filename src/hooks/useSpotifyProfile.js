import { useState, useEffect } from "react";

export default function useSpotifyProfile(token) {
  const [name, setName] = useState(null);
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    token !== null &&
    fetch('https://api.spotify.com/v1/me',
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json()).then(data => {
      setName(data.display_name !== null ? data.display_name : data.id);
      setFollowers(data.followers.total);
    });
  }, [token]);

  return {name, followers};
}
