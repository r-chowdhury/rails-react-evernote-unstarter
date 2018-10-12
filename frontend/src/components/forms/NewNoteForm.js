import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CreateNewNote extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      content: "",
      user_id: null
    }
  }

  styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

  handleNoteChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNoteData(this.state.title, this.state.content, this.state.user_id)
  }

  render()
    {return (
      <form className={this.props.container} noValidate onSubmit={this.handleSubmit}>
        <h2>Create New Note</h2>
        <div className="left">
          <TextField
            label="Title"
            name="title"
            type="text"
            className={this.props.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleNoteChange}
            value={this.state.title}
            />
          <TextField
            label="Content"
            type="text"
            name="content"
            className={this.props.textField}
            margin="normal"
            variant="outlined"
            multiline
            rowsMax="8"
            onChange={this.handleNoteChange}
            value={this.state.content}
            />
          <TextField
            label="User_id"
            type="text"
            name="user_id"
            className={this.props.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleNoteChange}
            value={this.state.user_id}
            />
        </div>
        <Button variant="contained" color="primary" label="Submit" type="submit">
          Submit
        </Button>
      </form>
  )}
}


export default CreateNewNote
