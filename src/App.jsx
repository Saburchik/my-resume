// == Base:
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
// == Styles:
import './App.css'
// == Components:
import Profile from './components/Profile/Profile'
import Header from './components/Main/Header'
import Home from './components/Articles/Home'
import Resume from './components/Articles/Resume'
import Portfolio from './components/Articles/Portfolio'

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <Router>
      {
        loading ?
          <div className="loadingpage">
            <PropagateLoader color={'#fff'} loading={loading} size={15} />
          </div>
          :
          <div className="wrapper">
            <div className="container" id="tabs">
              <Profile />
              <section className="information">
                <Header />
                <main className="main">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/portfolio" component={Portfolio} />
                  </Switch>
                </main>
              </section>
            </div>
          </div>
      }
    </Router>
  )
}

export default App
