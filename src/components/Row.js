import axios from '../api/axios';
import { React, useEffect, useState } from 'react';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        /* when the row loads, get movies for component */
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2> {title}</h2>

            {/* container */}
        </div>
    );
}

export default Row;