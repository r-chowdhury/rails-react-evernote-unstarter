import React from 'react'
import PropTypes from 'prop-types'

const Note = (props) => {
  return (
    <div>
      {props.note.title}
    </div>
  )
}

export default Note
