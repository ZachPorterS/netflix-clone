import axios from '../utils/axios';
import '../styles/Row.css';
import { React, useEffect, useState } from 'react';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        /* when the row loads, get movies for component */
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        /* Update if url ever changes */
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;