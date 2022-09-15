import { useEffect, useState } from 'react';

const Memes = () => {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});
	const [allMemeImages, setAllMemeImages] = useState([]);

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemeImages(data.data.memes));
	}, []);

	function getImage() {
		const memesArray = allMemeImages;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className="container flex">
				<input
					type="text"
					placeholder="Top text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button onClick={getImage}>Get a new meme image </button>

				<div className="meme">
					<img
						src={meme.randomImage}
						alt=""
					/>
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</div>
		</main>
	);
};

export default Memes;
