import gql from 'graphql-tag';

const getMovies = gql`
  query movie {
    movie {
      id
      movie
      rating
      comments
    }
  }
`;

const addMovie = gql`
  mutation addMovie($movie: String!, $rating: String!, $comments: String!) {
    insert_movie(objects: [{ movie: $movie, rating: $rating, comments: $comments }]) {
      returning {
        movie
        rating
        comments
      }
    }
  }
`;

const deleteMovie = gql`
  mutation delete_movie($id: uuid) {
    delete_movie(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export { addMovie, deleteMovie, getMovies };