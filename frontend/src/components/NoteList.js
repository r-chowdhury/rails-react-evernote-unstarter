import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Note from "./Note"

class NoteList extends React.Component {


  displayNote = (noteList) => {
    return noteList.map(note => {
      return <Note note={note} />
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
