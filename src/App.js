import React, { Component } from 'react'
import './App.css';
import UserItem from './components/users/userItem'
import Navbar from './components/layout/Navbar'
import Users from './components/users/user'

class App extends Component {
  componentDidMount(){
    console.log('124')
  }

  render(){
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Users />
      </div>
    </div>
    )
  }
}

export default App;
