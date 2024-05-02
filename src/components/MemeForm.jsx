import { useState, useEffect } from "react"
import { ImImages } from "react-icons/im"

function MemeForm() {
  const [meme, setMeme] = useState({
    topText: "Write...",
    bottomText: "...something",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const memesData = await res.json()
      setAllMemes(memesData.data.memes)
    }
    getMemes()
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  function handleFocus(e) {
    const { name } = e.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: "",
    }))
  }

  return (
    <main
      id="main-content"
      className="main-content"
    >
      <div>
        <form
          className="meme-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="inputs">
            <div>
              <label htmlFor="top-text">Top Text</label>
              <input
                type="text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                onFocus={handleFocus}
                id="top-text"
              />
            </div>

            <div>
              <label htmlFor="bottom-text">Bottom Text</label>
              <input
                type="text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                onFocus={handleFocus}
                id="bottom-text"
              />
            </div>
          </div>

          <button
            type="button"
            className="new-meme-button"
            onClick={getMemeImage}
          >
            <span>
              <span>Get new image</span> <ImImages className="icon" />
            </span>
          </button>
        </form>

        <div className="meme-display">
          <p className="meme-text meme-text-top">{meme.topText}</p>
          <div className="meme-image">
            <img
              src={meme.randomImage}
              alt=""
              width="477"
            />
          </div>
          <p className="meme-text meme-text-bottom">{meme.bottomText}</p>
        </div>
      </div>
    </main>
  )
}

export default MemeForm
