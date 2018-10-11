import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreateNewNote = (props) => {
  const styles = theme => ({
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

  return (
    <form className={props.container} noValidate autoComplete="off" onSubmit={props.handleCreateNoteForm}>
      <h2>Create New Note</h2>
      <div className="left">
        <TextField
          label="Title"
          className={props.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Content"
          multiline
          rowsMax="8"
          className={props.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  )
}


export default CreateNewNote
