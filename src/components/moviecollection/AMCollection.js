import React, { Component } from 'react';
import Airtable from 'airtable';
//import "../App.css";
//import { Link } from "react-router-dom";
//import { ColumnChart, LineChart } from "react-chartkick";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Pagination from 'react-js-pagination';


const base = new Airtable({ apiKey: process.env.REACT_APP_KEY }).base(
  process.env.REACT_APP_BASE
);
//apiKey and base is read-only and data cannot be edited
const styles = theme => ({
  bullet: {
    margin: '0 2px',

    transform: 'scale(0.8)',
    minWidth: 800,
    backgroundColor: 'lightblue'
  },
  title: {
    fontSize: 40
  },
  items: {
    fontSize: 25,
    color: 'black'
  }
});

class AM_Collection extends Component {
  state = {
    items: [],
    isLoading: false,
    activePage: 1,
    itemsCountPerPage: 5,
    totalItemsCount: 1
  };

  login() {
    this.props.auth.login();
  }

  componentDidMount() {
    base('AMs')
      .select({ view: 'Grid view' })
      .eachPage((items, fetchNextPage) => {
        this.setState({
          items,
          isLoading: true
        });
        console.log(items);
        fetchNextPage();
      });
  }
  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    const { classes } = this.props;
    const { items } = this.state;
    const { isAuthenticated } = this.props.auth;
        if (isAuthenticated()) {
            return (
    
      <div className="App">
        <h1>AM's Movie Collection Page</h1>

        {items
          .slice(
            (this.state.activePage - 1) * this.state.itemsCountPerPage,
            this.state.activePage * this.state.itemsCountPerPage
          )
          .map(record => {
            return (
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={10}>
                  <Card className={classes.bullet}>
                    <CardContent className={classes.title}>
                      <b>{record.fields['Movie']}</b>
                    </CardContent>
                    <CardContent className={classes.items}>
                      {' '}
                      Rating: {record.fields['Rating']}
                    </CardContent>
                    <CardContent className={classes.items}>
                      {' '}
                      Comments: {record.fields['Comments']}
                    </CardContent>
                    
                  </Card>
                </Grid>
              </Grid>
            );
          })}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  };
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

export default withStyles(styles)(AM_Collection);