import { MovieImage, StyledMovieCard } from "./styled";
import Button from 'react-bootstrap/Button';

export const MovieCard = ({ movie, updateMovieData, addMovieToUserMovieList }) => {
    return (
        <StyledMovieCard key={movie.imdbID}>
            <MovieImage src={movie.Poster} alt={`${movie.Title} poster`} fluid />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <Button onClick={() => updateMovieData('selectedMovie', movie.imdbID)}>Show Details</Button>
                {
                    addMovieToUserMovieList &&
                    <Button onClick={() => addMovieToUserMovieList(movie.imdbID)}>Add To My List</Button>
                }
            </div>
        </StyledMovieCard>
    )
}