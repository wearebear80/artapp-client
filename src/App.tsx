import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CheckUI from "modules/check"

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