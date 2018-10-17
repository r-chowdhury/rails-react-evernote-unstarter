import React, { Component } from 'react';
import './App.css';
import NoteList from "./components/NoteList"
import NewNoteForm from "./components/forms/NewNoteForm"
import NewNoteButton from "./components/buttons/NewNoteButton"
import HomePage from "./components/HomePage"
import ButtonAppBar from "./components/ButtonAppBar"
import SignUpPage from "./components/forms/SignUpPage"
import LoginPage from "./components/forms/LoginPage"
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
      userLoggedIn: false,
      toggleLogin: false,
      currentUser: ""
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/notes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
    }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          noteList: data
        }, console.log)
      })
    }
  
  updateEntryInState = (title, content, id, user_id) => {
    let y = this.state.noteList.map(note => {
      if (note.id === id) {
        return {
          title: title,
          content: content,
          id: id,
          user_id: user_id
        }
      } else {
        return note
      }
    })
    console.log(y)
    this.setState({
      noteList: y
    })



  }


  handleNoteData = (title, content, user_id) => {
    fetch("http://localhost:3000/api/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
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

  signUpSuccessful = () => {
    this.setState({
      toggleSignUp: !this.state.toggleSignUp,
      userLoggedIn: !this.state.userLoggedIn
    })
  }


  handleCreateNoteClick = () => {
    this.setState({
      toggleCreateNote: true,
    })
  }

  displayUserNotes = () => {
    return (
      <React.Fragment>
        <NoteList noteList={this.state.noteList}  updateEntryInState={this.updateEntryInState}/>
      </React.Fragment>
    )
  } 

  handleSignUp = () => {
    this.setState({
      toggleSignUp: !this.state.toggleSignUp
    })
  }

  handleLogin = () => {
    this.setState({
      toggleLogin: !this.state.toggleLogin
    }, console.log("hi"))
    
  }

  changeLoginState = () => {
    this.setState({
      userLoggedIn: !this.state.userLoggedIn,
      toggleLogin: !this.state.toggleLogin
    })
  }


  render() {
    if (this.state.toggleLogin === false && this.state.toggleSignUp === false && !localStorage.token) { //if user neither logged in nor signed up
      return (
        <HomePage handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>
        )
      } else if (this.state.toggleSignUp === true) {   //if user clicks SignUp
        return (
          <SignUpPage signUpSuccessful={this.signUpSuccessful}/>
        )
      } else if (this.state.toggleLogin === true) {
        return (
          <LoginPage changeLoginState={this.changeLoginState}/>
        )
      } else if (this.state.toggleCreateNote === true && !!localStorage.token) { //if User is signed in
      return (
        <div>
          <ButtonAppBar />
          {this.displayUserNotes()}
          <NewNoteForm handleNoteData={this.handleNoteData}/>
        </div>
      )
    } else if (!!localStorage.token && this.state.toggleCreateNote === false ){ //if User is Signed in
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
