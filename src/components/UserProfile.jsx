import React from "react";
import { useSpotifyProfile } from "../hooks";

export default function UserProfile({token}) {

  const profile = useSpotifyProfile(token);

  return(
    <div>
      <h4>Name: {profile.name}</h4>
      <h4>Followers: {profile.followers}</h4>
    </div>
  )
}
