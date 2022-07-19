import { useState, useEffect } from 'react'



const Movies = (props) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=9689c6a5&s=${props.search}`)
        .then(res => res.json())
        .then(res => {
            setMovies(res.Search);
            console.log(res.Search)
        })
    },[props.search])

    const cat = ["Action", "Drama", "War", "Thriller"];

    return(
        <div className="movies">
            <p className="cat-label">Movie Categories</p>
            <div className="movie-frame">
                {movies && movies.map((x, i) => {
                    return(
                        <div className="card" >
                            <img src={x.Poster} alt="" srcset="" />
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default Movies;