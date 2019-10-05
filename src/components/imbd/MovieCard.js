import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  bullet: {
    margin: "0 2px",
    justify: "center",
    transform: "scale(0.8)",
    minWidth: 800,
    backgroundColor: "salmon"
  },
  title: {
    fontSize: 50,
    alignItems: "center",
    justify: "center",
    textAlign: "center"
  },
  items: {
    fontSize: 25,
    spacing: 0,

    textAlign: "center"
  }
});

class MovieCard extends React.Component {
  state = {
    movieData: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=eff3a19&i=${
          this.props.movieID
        }&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        this.setState({ movieData: res });
      });
  }
  render() {
    const { classes } = this.props;
    const {
      Title,
      Released,
      Genre,
      Plot,
      Poster,
      imdbRating,
      imdbVotes,
      Metascore,
      Type,
    } = this.state.movieData;

    if (!Poster || Poster === "N/A") {
      return null;
    }

    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={15}>
            <Card className={classes.bullet}>
              <CardContent className={classes.title}>Movie Details</CardContent>
              <hr />
              <CardContent className={classes.items}>
                <h1 style={{ display: "center" }}>{Title}</h1>
                <small>Type: {Type}</small>
                <br />
                <small>Released Date: {Released}</small>

                <h4>
                  Imdb Rating: {imdbRating} / 10 from {imdbVotes} votes
                </h4>
                <h4>Metacritic Rating: {Metascore} / 100</h4>

                <p>{Plot}</p>
                <div>Genre: {Genre}</div>
                <img
                  width="500"
                  alt={`The movie titled: ${Title}`}
                  src={Poster}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(MovieCard);
