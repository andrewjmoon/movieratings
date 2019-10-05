import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { GRAPHQL_URL } from './constants';
import About from './components/About';
import Resources from './components/Resources';
import MovieRaterList from './components/MovieRaterList';
import MovieInput from './components/MovieInput';
import MoviesList from './components/imbd/MoviesList';
import MovieComponent from './components/MovieComponent'
import MovieCollectionMenu from './components/moviecollection/MovieCollectionMenu';
import AMCollection from './components/moviecollection/AMCollection';

const httpLink = createHttpLink({
  uri: GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth0:id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
});

const provideClient = component => {
  return <ApolloProvider client={client}>{component}</ApolloProvider>;
};

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Route
          path="/"
          render={props => provideClient(<App auth={auth} {...props} />)}
        />
        <Route
          path="/home"
          render={props => provideClient(<Home auth={auth} {...props} />)}
        />
        <Route
          path="/about"
          render={props => provideClient(<About auth={auth} {...props} />)}
        />
        <Route
          path="/movieraterlist"
          render={props => provideClient(<MovieRaterList auth={auth} {...props} />)}
        />
        <Route
          path="/movieinput"
          render={props =>
            provideClient(<MovieInput auth={auth} {...props} />)
          }
        />
        <Route
          path="/movieslist"
          render={props => provideClient(<MoviesList auth={auth} {...props} />)}
        />
        <Route
          path="/resources"
          render={props => provideClient(<Resources auth={auth} {...props} />)}
        />
        <Route
          path="/moviecomponent"
          render={props => provideClient(<MovieComponent auth={auth} {...props} />)}
        />
        <Route
          path="/moviecollectionmenu"
          render={props => provideClient(<MovieCollectionMenu auth={auth} {...props} />)}
        />
        <Route
          path="/collection/1/am"
          render={props => provideClient(<AMCollection auth={auth} {...props} />)}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};