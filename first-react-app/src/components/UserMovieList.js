import { useEffect, useState } from "react";
import UserMovieListService from '../services/userMovieList.service';

import { MovieListContainer } from '../components/styled';

import { MovieCard } from '../components/MovieCard';
import { MovieDetails } from '../components/MovieDetails';
import { ModalComponent } from '../components/ModalComponent';



export const UserMovieList = () => {
    const userMovieListService = new UserMovieListService();
    const [movieData, setMovieData] = useState({
        movieList: null,
        selectedMovie: null
    });

    useEffect(() => {
        setUserMovieList();
    }, []);

    const setUserMovieList = () => {
        const userMovieList = userMovieListService.getMovieList();

        updateMovieData('movieList', userMovieList);
    }

    const updateMovieData = (keyName, value) => {
        const updatedMovie = { ...movieData, [keyName]: value };
        console.log(`${keyName}:`, value);
        setMovieData(updatedMovie);
    }

    return (
        <div>
            <MovieListContainer>
                {
                    movieData.movieList && movieData.movieList.list.map((movie) => (
                        <MovieCard movie={movie} updateMovieData={updateMovieData}/>
                    ))
                }
            </MovieListContainer>
            <ModalComponent show={!!movieData.selectedMovie} onClose={() => updateMovieData('selectedMovie', null)}>
                <MovieDetails id={movieData.selectedMovie} />
            </ModalComponent>
        </div>
    );
};