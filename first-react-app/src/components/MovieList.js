import React, { useState } from "react";
import MovieService from '../services/movie.service';
import { MovieDetails } from './MovieDetails';
import { ModalComponent } from './ModalComponent';
import { NavComponent } from './NavComponent';
import { SearchBar } from './SearchBar';
import { Pagination } from './Pagination';

import { MovieListPageContainer, PaginationContainer, SearchBarContainer } from './styled';
import { MovieListContainer } from './styled';
import UserMovieListService from '../services/userMovieList.service';

import { MovieCard } from './MovieCard';
//import { StyledMovieCard } from './StyledMovieCard';
//import styles from '../styles/movieList.module.css';

export const MovieList = () => {
    const movieService = new MovieService();
    const userMovieListService = new UserMovieListService();
    const [movieData, setMovieData] = useState({
        selectedMovie: null,
        movieList: null,
        pageCount: 0,
        movieTitle: null,
        currentPage: 1,
    });

    const updateMovieData = (keyName, value) => {
        const updatedMovie = { ...movieData, [keyName]: value };
        setMovieData(updatedMovie);
    }

    const getMoviesByTitle = async (title) => {
        const movieList = await movieService.getMoviesByTitle(title);

        setMovieData({
            ...movieData,
            movieTitle: title,
            pageCount: Math.ceil(movieList.totalResults / 10),
            movieList: movieList.Search
        })
    }

    const getMoviesByPage = async (page) => {
        updateMovieData('currentPage', page);
        updateMovieData(prevstate => ({
            ...prevstate,
            currentPage:page
            }))
        const movieList = await movieService.getMoviesByTitle(movieData.movieTitle, page);

        updateMovieData('movieList', movieList.Search);
    }

    const onClose = () => updateMovieData('selectedMovie', null);

    const onSearch = (title) => {
        getMoviesByTitle(title);
    }

    const addMovieToUserMovieList = (id) => {
        userMovieListService.addMovieToList(id);
    }

    return (
        <MovieListPageContainer>
            <SearchBarContainer>
            <SearchBar onSearch={onSearch}/>
            </SearchBarContainer>
            { movieData.movieList &&
                <MovieListContainer>
                    {
                        movieData.movieList.map((movie) => (
                            <MovieCard
                                key={movie.imdbID}
                                movie={movie}
                                updateMovieData={updateMovieData}
                                addMovieToUserMovieList={addMovieToUserMovieList}
                            />
                        ))
                    }
                </MovieListContainer>
            }
            {
                movieData.movieList && movieData.pageCount > 0 &&
                <PaginationContainer>
                    <Pagination
                        pageCount={movieData.pageCount}
                        getMoviesByPage={getMoviesByPage}
                        currentPage={movieData.currentPage}
                    />
                </PaginationContainer>
            }
            {
                movieData.selectedMovie && (
                    <ModalComponent show={movieData.selectedMovie} onClose={onClose}>
                        <MovieDetails id={movieData.selectedMovie} />
                    </ModalComponent>
                )
            }
        </MovieListPageContainer>
    )
}

export default MovieList;