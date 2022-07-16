import React from 'react'
import './App.css'
import Header from './components/Header'
import AppContainer from './components/AppContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-layout">
      <Header />
      <AppContainer />
      <Footer />
    </div>
  )
}

export default App
