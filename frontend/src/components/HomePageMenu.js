import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class HomePageMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      toggleSignup: true,
      toggleLogin: false
    };
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleCloseLogin = () => {
    this.setState({ anchorEl: null });
    this.props.handleLogin();
  };

  handleCloseSignUp = () => {
    this.setState({ anchorEl: null });
    this.props.handleSignUp();
  };



  render() {
    const { anchorEl } = this.state;
    return <div>
        <Button aria-owns={anchorEl ? "simple-menu" : null} aria-haspopup="true" onClick={this.handleClick} color="inherit">
          New to BootNote or Already Have An Account?
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem onClick={e => this.handleCloseSignUp(e)}>
            Sign-Up
          </MenuItem>
          <MenuItem onClick={e => this.handleCloseLogin(e)}>
            Login
          </MenuItem>
        </Menu>
      </div>;
  }
}

export default HomePageMenu;