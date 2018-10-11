import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Note = (props) => {
  return (
      <List component="nav">
        <ListItem button>
          <ListItemText primary={props.note.title} />
          <ul className="left">
            <li>{props.note.content}</li>
          </ul>
        </ListItem>
        <Divider />
    </List>
  )
}

export default Note
