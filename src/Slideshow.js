import React,{useState,useEffect} from 'react';


export default function Slideshow(props) {

    const {films} = props
    // const film = films[0]

    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)

    useEffect(()=>{
        setCurrentFilm(films[currentFilmIndex])
      },[films, currentFilmIndex])


    return (
         <>
            <h2>{currentFilm.title}</h2>
            <p>{currentFilm.original_title}</p>
            <p>{currentFilm.release_date}</p>
            <p>{currentFilm.description}</p>

        <p>{currentFilmIndex}</p>
        <button onClick={() => {setCurrentFilmIndex(0)}}>Start Over</button>
        <button onClick={() => {setCurrentFilmIndex(currentFilmIndex - 1)}}>Back</button>
        <button onClick={() => {setCurrentFilmIndex(currentFilmIndex + 1)}}>Next</button>
        </>
    )
}