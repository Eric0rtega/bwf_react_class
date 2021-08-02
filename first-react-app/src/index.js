import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//import App from './App';
//import reportWebVitals from './reportWebVitals';
import { MovieList } from './components/MovieList';
import { UserMovieList } from './components/UserMovieList';
import { NavComponent } from './components/NavComponent';
//import { Pagination } from './components/Pagination';
//import { Form } from './components/Form';
//import { ModalComponent } from './components/ModalComponent';
//import { MovieDetails } from './components/MovieDetails';

//import { Provider } from './context/index.context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavComponent/>
      <Switch>
        <Route exact path='/' component={MovieList}/>
        <Route exact path='/user-movie-list' component={UserMovieList}/>
      </Switch>
      {/* <Pagination /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// NOTES:
// JSX Fragments

//Add this to the form component logFormData={logFormData}