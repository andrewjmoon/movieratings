import React from 'react';
import { Mutation } from 'react-apollo';
import { deleteMovie, getMovies } from './Queries';

const DeleteRecord = ( id ) => {
  return (
    <Mutation mutation={deleteMovie}>
      {(delete_movies, { data }) => (
        <span
          title="Delete Todo"
          className="float-right mt-n2 ml-4"
          onClick={e => {
            delete_movies({
              variables: id,
              refetchQueries: [{ query: getMovies }]
            });
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
  );
};
export default DeleteRecord;
