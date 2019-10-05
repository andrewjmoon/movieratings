import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
        
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ul>
            <li>
              <Link className="Link" to="/home">
                {' '}
                Home{' '}
              </Link>
            </li>
            <Divider />
            <br />
            <li>
              <Link className="Link" to="/moviecomponent">
                {' '}
                Movie Input and List{' '}
              </Link>
            </li>
            <Divider />
            <br />
            <li>
              <Link className="Link" to="/movieslist">
                {' '}
                Movies List{' '}
              </Link>
            </li>
            <Divider />
            <br />
            <li>
              <Link className="Link" to="/resources">
                {' '}
                Resources{' '}
              </Link>
            </li>
            <Divider />
            <br />
            <li>
              <Link className="Link" to="/moviecollectionmenu">
                {' '}
                Movie Collection Menu{' '}
              </Link>
            </li>
            <Divider />
          </ul>
        </div>
      </Drawer>
    );
  }
}