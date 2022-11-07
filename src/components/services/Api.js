import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'b57d518fc10de59d42b7f695d79e0fa4';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrending = async (signal) => {
    const res = await axios.get(`/trending/all/day?api_key=${KEY}`, signal)
    return res.data;
}

export const getSearchMovies = async (queryName, signal) => {
    const res = await axios.get(`/search/movie?api_key=${KEY}&query=${queryName}`, signal)
    return res.data;
}

export const getMovieDetails = async (id, signal) => {
    const res = await axios.get(`/movie/${id}?api_key=${KEY}`, signal)
    return res.data;
}

export const getMovieCredits = async (id, signal) => {
    const res = await axios.get(`/movie/${id}/credits?api_key=${KEY}`, signal)
    return res.data;
}

export const getMovieReviews = async (id, signal) => {
    const res = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`, signal)
    return res.data;
}