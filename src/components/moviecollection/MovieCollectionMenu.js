import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

class MovieCollectionMenu extends Component{
    login() {
        this.props.auth.login();
      }
    render () {
        const { isAuthenticated } = this.props.auth;
        if (isAuthenticated()) {
            return (
    
        <div className='App'>
            <h1>Movie Collection Menu</h1>
            <br />
            <Button
            component={Link}
            variant="contained"
            color="primary"
            className="center"
            to="/collection/1/am"
          >
            AM's Collection
          </Button>
        </div>
    )
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

export default MovieCollectionMenu