import React,{useState,useEffect} from 'react';


export default function Slideshow(props) {

    const {films} = props
    // const film = films[0]

    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)

    useEffect(()=>{
        if (currentFilmIndex == 0) {
            document.getElementById("goback").disabled = true
        } else {
            document.getElementById("goback").disabled = false
        }
        if (currentFilmIndex == 8) {
            document.getElementById("next").disabled = true
        } else {
            document.getElementById("next").disabled = false
        }
        
        setCurrentFilm(films[currentFilmIndex])
    },[films, currentFilmIndex])
    
    
    return (
        <>
            <div className="movieCard">
                <h2>{currentFilm.title}</h2>
                <p>{currentFilm.original_title}</p>
                <p>{currentFilm.release_date}</p>
                <p>{currentFilm.description}</p>
                <img className="image" src={currentFilm.image}  alt="movie poster"/>

                <p>{currentFilmIndex}</p>
                <button onClick={() => {setCurrentFilmIndex(0)}}>Start Over</button>
                <button id="goback" onClick={() => {setCurrentFilmIndex(currentFilmIndex - 1)}}>Back</button>
                <button id="next"onClick={() => {setCurrentFilmIndex(currentFilmIndex + 1)}}>Next</button>
            </div>
        </>
    )
    
}