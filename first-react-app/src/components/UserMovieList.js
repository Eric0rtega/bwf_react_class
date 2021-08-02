import { useEffect, useState } from "react";
import UserMovieListService from '../services/userMovieList.service';

import { MovieListContainer } from '../components/styled';

import { MovieCard } from '../components/MovieCard';
import { MovieDetails } from '../components/MovieDetails';
import { ModalComponent } from '../components/ModalComponent';



export const UserMovieList = () => {
    const userMovieListService = new UserMovieListService();
    const [movieData, setMovieData] = useState({
        movieList: [],
        selectedMovie: null
    });

    useEffect(() => {
        setUserMovieList();
    }, []);

    const setUserMovieList = () => {
        const userMovieList = userMovieListService.getMovieList();

        updateMovieData('movieList', userMovieList ? userMovieList : []);
    }

    const updateMovieData = (keyName, value) => {
        const updatedMovie = { ...movieData, [keyName]: value };
        console.log(`${keyName}:`, value);
        setMovieData(updatedMovie);
    }

    // const deleteMovieFromList = (id) => {
    //     userMovieListService.deleteMovieFromList
    // }

    const removeMovieFromList = (movie) => {
        const movieList = JSON.parse(localStorage.getItem('movieList'));
        const updatedMovieList = movieList.list.filter((movieFromList) => movieFromList.imdbID !== movie.imdbID);
        
        if(updatedMovieList.length) {
            movieList.list = updatedMovieList;
            localStorage.setItem('movieList', JSON.stringify(movieList));
        } else {
            localStorage.removeItem('movieList');
        }
        setUserMovieList();
    }

    return (
        <div>
            <MovieListContainer>
                {
                    movieData.movieList && movieData.movieList.list && movieData.movieList.list.map((movie) => (
                        <MovieCard movie={movie} updateMovieData={updateMovieData} removeMovieFromList={removeMovieFromList}/>
                    ))
                }
            </MovieListContainer>
            {
                movieData.selectedMovie && 
                <ModalComponent show={!!movieData.selectedMovie} onClose={() => updateMovieData('selectedMovie', null)}>
                <MovieDetails id={movieData.selectedMovie} />
                </ModalComponent>
            }
        </div>
    );
};