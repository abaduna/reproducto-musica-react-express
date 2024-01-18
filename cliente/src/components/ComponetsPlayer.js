import React, { useEffect, useState } from "react";
import Player from "@madzadev/audio-player";
import { useFecth } from "../hoock/useFetch";
const ComponetsPlayer = () => {
  const [endpoint, setEndpoint] = useState(`tracks`);
  const { state, getData } = useFecth(endpoint);
  const { data, loading, error } = state;
  const [dataMusic,setdataMusic] = useState()
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      await getData();
      console.log(data);
      setdataMusic(data);
    };
  
    fetchData();
  }, []);
  
  let tracks = [];
  tracks = [
    {
      url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
      title: 'Madza - Chords of Life',
      tags: ['house']
    },
    {
      url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
      title: 'Madza - Late Night Drive',
      tags: ['dnb']
    },
    {
      url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
      title: 'Madza - Persistence',
      tags: ['dubstep']
    }
  ]
  if (Array.isArray(data) && data.length > 0) {
    tracks = Array.isArray(data)
      ? data.map(track => ({
          url: track.url,
          title: track.url, // Cambia esto si tienes un campo específico para el título
          tags:[track.category?.replace(/"/g, '')] 
        }))
      : [];
  }
console.log(tracks);
//
  return (
    <>
      <Player trackList={Array.isArray(dataMusic)> 0 ? dataMusic : tracks}  />
      
    </>
  );
};
export default ComponetsPlayer;
