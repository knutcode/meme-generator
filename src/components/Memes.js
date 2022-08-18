import { useState } from "react";
import memesData from "../data/data.js";

const Memes = () => {
  const [memeImage, setNewImage] = useState("");

  function getImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setNewImage(memesArray[randomNumber].url);
  }

  return (
    <div className="container flex">
      <input type="text" placeholder="Top text"></input>
      <input type="text" placeholder="Bottom text"></input>
      <button onClick={getImage}>Get a new meme image</button>
      <img src={memeImage} alt="" />
    </div>
  );
};

export default Memes;
