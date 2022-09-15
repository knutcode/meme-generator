import { useState } from "react";
import memesData from "../data/data.js";

const Memes = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="container flex">
      <input type="text" placeholder="Top text"></input>
      <input type="text" placeholder="Bottom text"></input>
      <button onClick={getImage}>Get a new meme image</button>
      <img src={meme.randomImage} alt="" />
    </div>
  );
};

export default Memes;
