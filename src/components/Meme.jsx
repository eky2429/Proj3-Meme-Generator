import React from "react"
import memesData from "../memesData.jsx"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImage] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(oldMeme => ({...oldMeme, randomImage: url}))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(data => {
            return {
                ...data,
                [name]: value

            }
        })
    }

    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input
                        id="top-text"
                        type="text" 
                        placeholder="Shut up"
                        className="form--input"
                        onChange = {handleChange}
                        name = "topText"
                        value = {meme.topText}
                    />
                </div>
                <div>
                    <label>Bottom Text
                    <input
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                            onChange = {handleChange}
                            name = "bottomText"
                            value = {meme.bottomText}
                        />
                    </label>
                </div>
                <button
                    className="form--button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}