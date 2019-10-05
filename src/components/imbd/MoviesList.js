import React from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

class MoviesList extends React.Component {
  state = {
    moviesList: ["tt0059221"],
    searchTerm: ""
  };

  login() {
    this.props.auth.login();
  }

  search = event => {
    event.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com/?apikey=eff3a19&s=${
          this.state.searchTerm
        }&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        if (!res.Search) {
          this.setState({ moviesList: [] });
          return;
        }

        const moviesList = res.Search.map(movie => movie.imdbID);
        this.setState({
          moviesList
        });
      });
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { moviesList } = this.state;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
    return (
      <div className='App'>
        <h1>Search for your Movie here: </h1>
        <form onSubmit={this.search}>
          <input
            placeholder="Search for a movie"
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
        {moviesList.length > 0 ? (
          moviesList.map(movie => <MovieCard movieID={movie} key={movie} />)
        ) : (
          <p>
            Couldn't find any movie. Please search again using another search
            criteria.
          </p>
        )}
      </div>
    );
        }
        return (
          <div className="container">
            <h4>
              You are not logged in! Please{' '}
              <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                Log In
              </a>{' '}
              to continue.
            </h4>
          </div>
        );
  }
}

export default MoviesList;