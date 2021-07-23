import axios from 'axios';
//import title from '../components/MovieList'; //Where do I import title from?

const apiKey = '1b95878a';

export default class MovieService {
    getMoviesByTitle(title="superman", page=1) {
        return axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }
    getMovieById(id) {
        return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    }
}