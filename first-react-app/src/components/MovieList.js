import { useState } from "react";
import MovieService from '../services/movie.service';
import { MovieDetails } from './MovieDetails';
import { ModalComponent } from './ModalComponent';
import { SearchBar } from './SearchBar';
import { Pagination } from './Pagination';

import { MovieListPageContainer } from './styled';
import { MovieListContainer } from './styled';
import UserMovieListService from '../services/userMovieList.service';

import { MovieCard } from './MovieCard';
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
        //updateMovieData('currentPage', page);
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
            <SearchBar onSearch={onSearch}/>
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
                    <Pagination
                        pageCount={movieData.pageCount}
                        getMoviesByPage={getMoviesByPage}
                        currentPage={movieData.currentPage}
                    />
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

    //const [selectedMovie, setSelectedMovie] = useState();
    //const [movieList, setMovieList] = useState();
    //const [pages, setPages] = useState();
    //const userMovieListService = new UserMovieListService();

    // const addToMovieList = async (movie) => {
    //     const movieList = await userMovieListService.addToMovieList();

    //     console.log(movieList);
    // }

    // const renderPagination = () => {
    //     return (
    //         <div>
    //             {
    //                 [...pages].forEach((index) => {

    //                 })
    //             }
    //         </div>
    //     )
    // }

    //Maybe move this render movie list somewhere else?
    // const renderMovieList = () => (
    //     movieList.map((movie, index) => (
    //         <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
    //             <div className="d-block mb-4 h-100 text-center text-md-start" onClick={() => setSelectedMovie(movie.imdbID)}>
    //                 <img src={movie.Poster} alt={`${movie.Title} poster`} style={{width:'300px',maxWidth:'100%'}} />
    //                 <div>
    //                     <p>{ movie.Title }</p>
    //                     <button onClick={() => setSelectedMovie(movie.imdbID)}>
    //                     { index === selectedMovie ? "Hide Movie" : "Show Movie" }
    //                     </button>
    //                     <button onClick={() => setMovieList(movie.imdbID)}>
    //                     Add to List
    //                     </button>
    //                 </div>
    //             </div>
    //             <ModalComponent
    //                 show={selectedMovie}
    //                 onClose={onClose}
    //             >
    //                 <MovieDetails
    //                         id={selectedMovie}
    //                     />
    //             </ModalComponent>
    //     </div>
    //     ))
    // );
//Change or add some code below this line, need only one return statement.
    

// return(
//     <div className="container">
//         <h1 className="font-weight-light mt-4 mb-0">Movie List</h1>
//         {/* <LogFormData /> */}
//         <div className="row align-items-center">
//             { movieList && renderMovieList() }
//         </div>
//     </div>
//     )
// }

export default MovieList;