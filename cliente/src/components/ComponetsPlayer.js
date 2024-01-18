import React, { useEffect ,useState} from "react";
import Player from "@madzadev/audio-player";
import {useFecth} from "../hoock/useFetch"
const ComponetsPlayer = () => {
  const [endpoint, setEndpoint] = useState(`tracks`);
  const { state,getData } = useFecth(endpoint);
  const { data, loading, error } = state;
// console.log(data);
 useEffect(()=>{
  getData()
 },[])
  const tracks = [
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
  ];
  return (
    <>
      <Player trackList={tracks} />
    </>
  );
};
export default ComponetsPlayer;
