import React,{useState,useEffect} from 'react';


export default function Slideshow(props) {

    const {films} = props

    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)

    // if whatever is in the end brackets changes then the code in the {} runs every 
    // time it changes.  If [] are empty, code just runs once, like in the fetch
    useEffect(()=>{
        setCurrentFilm(films[currentFilmIndex])
    },[films, currentFilmIndex])
    
    
    return (
        <>
            <div className="movieCard">
        {/* currentFilm becomes the film at currentFilmIndex in useEffect above and
        the currentFilmIndex is set in the onClick event in the buttons */}
                <h2>{currentFilm.title}</h2>
                <p>{currentFilm.original_title}</p>
                <p>{currentFilm.release_date}</p>
                <p>{currentFilm.description}</p>
                <img className="image" src={currentFilm.image}  alt="movie poster"/>

                <p>{currentFilmIndex}</p>
                {/* disabled = true when whatever condition in the {} is met */}
                <button onClick={() => {setCurrentFilmIndex(0)}} 
                    disabled={currentFilmIndex===0}>Start Over</button>
                <button onClick={() => {setCurrentFilmIndex(currentFilmIndex - 1)}}
                    disabled={currentFilmIndex===0}>Back</button>
                <button onClick={() => {setCurrentFilmIndex(currentFilmIndex + 1)}}
                    disabled={currentFilmIndex===8}>Next</button>
            </div>
        </>
    )
    
}