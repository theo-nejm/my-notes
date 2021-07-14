import React, { Component } from 'react';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import NoNotes from './components/NoNotes';

import GlobalStyles from './styles/GlobalStyles'
import './styles/fonts.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAddNote: false,
      notes: JSON.parse(localStorage.getItem('notes')) || []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCloseButton = this.handleCloseButton.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  handleClick() {
    this.setState({
      isAddNote: !this.state.isAddNote,
    })
  }

  handleCloseButton() {
    this.setState({
      isAddNote: false,
    })
  }

  handleSubmit() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    if(!title || !body) {
      this.setState({
        isAddNote: false,
      })
      return;
    }

    const newNote = [title, body]

    const newNotes = this.state.notes.slice()
    newNotes.push(newNote)
    const JSONNewNotes = JSON.stringify(newNotes);
    localStorage.setItem('notes', JSONNewNotes)
    this.setState({
      notes: newNotes,
      isAddNote: false,
    })
  }

  deleteNote(event) {
    const index = parseInt(event.target.id)
    let newNotes = this.state.notes.slice()
    newNotes.splice(index, 1)
    const JSONNewNotes = JSON.stringify(newNotes);
    localStorage.setItem('notes', JSONNewNotes)

    this.setState({
      notes: newNotes,
    })
  }

  render () {
    return(
      <div className="App">
        <Header
          onClick={() => this.handleClick()}
        />
        {
          this.state.notes.length > 0 ?
          <Notes
            notes={this.state.notes}
            deleteNote={this.deleteNote}
          /> :
          <NoNotes />
        }

        {
          this.state.isAddNote ?
          <CreateNote
            onClickCloseButton={this.handleCloseButton}
            onClickSubmit={this.handleSubmit}
          /> :
          ''
        }

        <GlobalStyles />
      </div>
  )};
}

export default App;
