import React, { useEffect, useState } from "react";
import Player from "@madzadev/audio-player";
import { useFecth } from "../hoock/useFetch";
const ComponetsPlayer = () => {
  const [endpoint, setEndpoint] = useState(`tracks`);
  const { state, getData } = useFecth(endpoint);
  const { data, loading, error } = state;
  useEffect(() => {
    getData();
  
  }, []);
  let tracks =[]
  console.log(data);
  if (data !== undefined) {
    console.log(tracks);

    tracks =data?.map((track) => {
      console.log(track);
      return {
        url: track.url,
        title: track.utr_tracks,
        tags:[track.category] ,
      };
    });   
  }

  // const tracks = data?.map((track) => {
  //   return {
  //     url: track.utr_tracks,
  //     title: track.utr_tracks,
  //     tags: track.category,
  //   };
  // });
  return (
    <>
      <Player trackList={tracks} />
    </>
  );
};
export default ComponetsPlayer;
