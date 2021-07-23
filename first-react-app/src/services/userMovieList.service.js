import MovieService from './movie.service';

const movieService = new MovieService();

export default class UserMovieListService {
    async addMovieToList(id) {
        const movie = await movieService.getMovieById(id);

        let movieList = localStorage.getItem('movieList');

        if (movieList) {
            movieList = JSON.parse(movieList);
            movieList.list.push(movie);
    };

    if (!movieList) movieList = { list: [ movie ] };

    localStorage.setItem('movieList', JSON.stringify(movieList));
    }
    getMovieList() {
        let movieList = localStorage.getItem('movieList');
        if (!movieList) return null;

        return JSON.parse(movieList);
    }
}