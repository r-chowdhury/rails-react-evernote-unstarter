import React, { Component } from 'react';
import './App.css';
import NoteList from "./components/NoteList"
import NewNoteForm from "./components/forms/NewNoteForm"
import NewNoteButton from "./components/buttons/NewNoteButton"
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
      toggleSignUp: false
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
      noteList: [...this.state.noteList, {title, content, user_id} ],
    })
  }


  handleCreateNoteClick = () => {
    this.setState({
      toggleCreateNote: true
    })
  }

  displayUserNotes = () => {
    return (
      <React.Fragment>
        <NoteList noteList={this.state.noteList}  updateEntry={this.updateEntry}/>
      </React.Fragment>
    )
  }

  updateEntry = () => {
    console.log("hello")
    fetch("http://localhost:3000/notes")
  }

  render() {
    if (this.state.toggleCreateNote === true) {
      return (
        <div>
          <ButtonAppBar />
          {this.displayUserNotes()}
          <NewNoteForm handleNoteData={this.handleNoteData}/>
        </div>
      )
    } else {
      return (
        <div>
          <ButtonAppBar />
          {this.displayUserNotes()}
          <NewNoteButton handleCreateNoteClick={this.handleCreateNoteClick}/>
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
