import React, { useEffect, useState } from 'react';
import MovieService from '../services/movie.service';

import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

import {
    MovieContainer,
    MovieDetailsContainer,
    TitleRatingContainer
} from './styled';

export const MovieDetails = ({ id }) => {
    const [movie, setMovie] = useState();

    const movieService = new MovieService();

    useEffect(() => {
        getMovieById(id);
    }, [id]);

    const getMovieById = async (id) => {
        const movie = await movieService.getMovieById(id);
        setMovie(movie);
    }

return movie
    ? (
        <MovieContainer>
            <Image src={movie.Poster} alt={`${movie.Title} poster`} fluid />
            <MovieDetailsContainer>
                <TitleRatingContainer>
                    <h2>{movie.Title}</h2>
                    {/* <Badge bg="primary">
                        {
                            movie.Ratings.length > 0
                                ? movie.Ratings[0].Value
                                : "N/A"
                        }
                    </Badge> */}
                </TitleRatingContainer>
                <div>
                    <Badge bg="secondary">{ movie.Rated }</Badge>
                    <Badge bg="secondary">{ movie.Runtime }</Badge>
                    <Badge bg="secondary">{ movie.Genre }</Badge>
                </div>
                <div>
                    <h4>Plot</h4>
                    { movie.Plot }
                </div>
                <div>
                    <h4>Actors</h4>
                    { movie.Actors }
                </div>
            </MovieDetailsContainer>
        </MovieContainer>
    )

: (
    <h2>...Loading</h2>
);
}

export default MovieDetails;