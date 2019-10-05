import React, { Component } from 'react';

class Resources extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    
    if (isAuthenticated()) {
      return (
        <div className="App">
          <h1 className="center">
            {' '}
            Resources Page: Check out the resources below
          </h1>
          <ul>
            <li className="Link">
              Search for an Actor's Filmography
              <a
                style={{ color: 'black' }}
                href="https://www.fandango.com/people/adam-west-719678"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.fandango.com/people/adam-west-719678
              </a>
            </li>
            <br />
            <li className="Link">
              The IMDb list of the top 100 movies of all time.
              <a
                style={{ color: 'black' }}
                href="https://www.imdb.com/list/ls055592025/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.imdb.com/list/ls055592025/
              </a>
            </li>
            <br />
            <li className="Link">
              The Rotten Tomatoes list of top horror films.
              <a
                style={{ color: 'black' }}
                href="http://editorial.rottentomatoes.com/guide/best-horror-movies-of-all-time/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                http://editorial.rottentomatoes.com/guide/best-horror-movies-of-all-time/
              </a>
            </li>
            <br />
            <li className="Link">
              The Rotten Tomatoes list of top classic films.
              <a
                style={{ color: 'black' }}
                href="https://www.rottentomatoes.com/top/bestofrt/top_100_classics_movies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.rottentomatoes.com/top/bestofrt/top_100_classics_movies/
              </a>
            </li>
            <br />
            <li className="Link">
              The Cinemaholic's List of best suspense films.
              <a
                style={{ color: 'black' }}
                href="https://www.thecinemaholic.com/the-best-suspense-and-mystery-movies-of-all-time-ranked/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.thecinemaholic.com/the-best-suspense-and-mystery-movies-of-all-time-ranked/
              </a>
            </li>
            <br />
            <li className="Link">
              The townandcountry's list of 27 classic Halloween Movies.
              <a
                style={{ color: 'black' }}
                href="https://www.townandcountrymag.com/leisure/g12107335/best-classic-halloween-movies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.townandcountrymag.com/leisure/g12107335/best-classic-halloween-movies/
              </a>
            </li>
          </ul>
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

export default Resources;