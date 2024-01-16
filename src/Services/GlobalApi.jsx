import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key="9a19812d2e11ac0c623a5993c4f04a76";
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=' + api_key;
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)
export default{
    getTrendingVideos,
    getMovieByGenreId
}