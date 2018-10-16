import React, { Component } from 'react';
import './App.css';
import NoteList from "./components/NoteList"
import NewNoteForm from "./components/forms/NewNoteForm"
import NewNoteButton from "./components/buttons/NewNoteButton"
import HomePage from "./components/HomePage"
import ButtonAppBar from "./components/ButtonAppBar"
import SignUpPage from "./components/forms/SignUpPage"
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
      toggleSignUp: false,
      userLoggedIn: false
    }
  }

  updateEntryInState = (title, content, id) => {
    let y = this.state.noteList.map(note => {
      if (note.id === id) {
        return {
          title: title,
          content: content,
          id: id
        }
      } else {
        return note
      }
    })

    this.setState({
      noteList: y
    })



  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/notes")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          noteList: data
        })
      console.log(data)})
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
          user_id,

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
        <NoteList noteList={this.state.noteList}  updateEntryInState={this.updateEntryInState}/>
      </React.Fragment>
    )
  } 

  handleLogin = () => {
    this.setState({
      userLoggedIn: !this.state.userLoggedIn
    })
  }

  handleSignUp = () => {
    this.setState({
      toggleSignUp: !this.state.toggleSignUp
    })
  }


  render() {
    if (this.state.userLoggedIn === false && this.state.toggleSignUp === false) {
      return (
        <HomePage handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>
        )
      } else if (this.state.toggleSignUp === true && this.state.userLoggedIn === false) {   
        return (
          <SignUpPage />
        )
      } else if (this.state.toggleCreateNote === true && this.state.userLoggedIn === true) {
      return (
        <div>
          <ButtonAppBar />
          {this.displayUserNotes()}
          <NewNoteForm handleNoteData={this.handleNoteData}/>
        </div>
      )
    } else if (this.state.userLoggedIn === true && this.state.toggleCreateNote === false ){
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
