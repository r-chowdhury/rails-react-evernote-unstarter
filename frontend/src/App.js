import React, { Component } from 'react';
import './App.css';
import NoteList from "./components/NoteList"
import CreateNewNote from "./components/forms/CreateNewNote"
import CreateNoteButton from "./components/buttons/CreateNoteButton"
import ButtonAppBar from "./components/ButtonAppBar"
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
      newFormContent: "",
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

  handleNoteData = (title, content, user_id) => {
    fetch("http://localhost:3000/api/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: {
          title,
          content,
          user_id
        }
      })
    })

    this.setState({
      noteList: [...this.state.noteList, {title, content, user_id} ]
    })
  }


  handleCreateNoteClick = e => {
    this.setState({
      toggleCreateNote: true

    })
  }

  render() {
    if (this.state.toggleCreateNote) {
      return (
        <div>
          <ButtonAppBar />
          <NoteList noteList={this.state.noteList}  />
          <CreateNewNote handleNoteData={this.handleNoteData}/>
        </div>
      );
    } else {
      return (
        <div>
          <ButtonAppBar />
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
