import axios from 'axios';
/* Set base for requests to TMDB */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;