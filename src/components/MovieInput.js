import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { addMovie, getMovies } from './Queries';


const MovieInput = () => {
  const [movie, setMovie] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  //const [episode, setEpisode] = useState('');
  //const [rating, setRating] = useState('');
  const resetInput = () => {
    setMovie('');
    setRating('');
    setComments('');
  };

  return (
    <Mutation
      mutation={addMovie}
      refetchQueries={() => {
        return [
          {
            query: getMovies,
            variables: { movie, rating, comments }
          }
        ];
      }}
      resetInput
    >
      {(addMovie, { data }) => (
        <form
          className="center"
          onSubmit={e => {
            e.preventDefault();
            addMovie({
              variables: {
                movie,
                rating,
                comments
              }
            }).then(resetInput);
          }}
        >
          <fieldset>
            <input
              type="text"
              placeholder="movie"
              value={movie}
              onChange={e => setMovie(e.target.value)}
            />
            <input
              type="text"
              placeholder="rating"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
            <input
              type="text"
              placeholder="comments"
              value={comments}
              onChange={e => setComments(e.target.value)}
            />

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      )}
    </Mutation>
  );
};
export default MovieInput;