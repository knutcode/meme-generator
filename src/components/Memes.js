import { useRef, useEffect } from "react";
import memesData from "../data/data.js";

const Memes = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      console.log("Button clicked");
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="container flex">
      <input type="text" placeholder="Top text"></input>
      <input type="text" placeholder="Bottom text"></input>
      <button ref={ref}>Get a new meme image</button>
    </div>
  );
};

export default Memes;
