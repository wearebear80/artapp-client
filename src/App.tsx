import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CheckUI from "modules/check"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

AOS.init()

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <CheckUI />
        </Route>
      </Switch>
    </Router>
  )
}

export default App