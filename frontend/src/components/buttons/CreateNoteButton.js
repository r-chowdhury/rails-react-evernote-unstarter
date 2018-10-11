import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CreateNoteButton = (props) => {
  return (
    <div onClick={props.handleCreateNoteClick}>
      <Button variant="contained" color="primary" className={props.button}>
        +
      </Button>
    </div>
  )
}

export default CreateNoteButton
