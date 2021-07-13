import React, { Component } from 'react';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';


import GlobalStyles from './styles/GlobalStyles'
import './styles/fonts.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAddNote: false,
    }
  }

  handleClick() {
    this.setState({
      isAddNote: !this.state.isAddNote,
    })
  }

  render () {
    return(
      <div className="App">
        <Header onClick={() => this.handleClick()}/>
        {
          this.state.isAddNote ?
          <CreateNote /> :
          <Notes />
        }
        <GlobalStyles />
      </div>
  )};
}

export default App;
