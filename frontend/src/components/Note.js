import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class Note extends React.Component {
  constructor() {
    super()
    this.state = {
      toggleNoteTitle: false
    }
  }



  render() {
    return (
      <List component="nav">
        <ListItem button>
          <ListItemText primary={this.props.note.title} />
          <ul className="left">
            <li>{this.props.note.content}</li>
          </ul>
        </ListItem>
        <Divider />
    </List>
  )}
}

export default Note
