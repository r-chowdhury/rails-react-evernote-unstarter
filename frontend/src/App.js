import React, { Component } from 'react';
import './App.css';
import NoteList from "./components/NoteList"
import CreateNewNote from "./components/forms/CreateNewNote"
import CreateNoteButton from "./components/buttons/CreateNoteButton"
/*
Components: Notes, NotesList

*/

class App extends Component {
  constructor() {
    super()
    this.state = {
      noteList: [],
      toggleCreateNote: false,
      newFormTitle: "",
      newFormContent: ""
    }
  }


  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/notes")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          noteList: data
        })
      })
  }

  handleCreateNoteForm = e => {
    e.preventDefault()
    console.log(e.target[0].value)
  }

  handleCreateNoteClick = e => {
    this.setState({
      toggleCreateNote: true
    })
  }

  render() {
    if (this.state.toggleCreateNote) {
      //if toggleCreateNote is false, render note list with
      //button

      //if toggleCreateNote is true, render note list
      //with form itself.
      return (
        <div>
          <NoteList noteList={this.state.noteList}  />
          <CreateNewNote handleCreateNoteForm={this.handleCreateNoteForm}/>
        </div>
      );
    } else {
      return (
        <div>
          <NoteList noteList={this.state.noteList} />
          <CreateNoteButton handleCreateNoteClick={this.handleCreateNoteClick} />
        </div>
      )
    }
  }
}

export default App;







// fetch("http://localhost:3000/api/v1/notes", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     note: {
//       user,
//       title,
//       content
//     }
//   })
// })
