import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Note from "./Note"

class NoteList extends React.Component {

  displayNote = (noteList) => {
    return noteList.map(note => {
      if (parseInt(localStorage.user_id,10) === note.user_id) {
        return <Note note={note} updateEntryInState={this.props.updateEntryInState}/>
      }
    })
  }

  render () {
    return (
      <div>
        {this.displayNote(this.props.noteList)}
      </div>
    )
  }
}

export default NoteList;
