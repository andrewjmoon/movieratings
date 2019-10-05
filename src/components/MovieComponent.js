import React from 'react';
import MovieInput from './MovieInput';
import MovieRaterList from './MovieRaterList';

class CombinedRecords extends React.Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const userId = localStorage.getItem('auth0:id_token:sub');
    if (isAuthenticated()) {
      return (
        <div className="App">
          <h1 className="center"> Type in your rating here: </h1>
          <MovieInput userId={userId} />
          <MovieRaterList />
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

export default CombinedRecords;