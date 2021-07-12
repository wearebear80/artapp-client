import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AdminUi from 'modules/Admin/ui/Form'
import VideoUi from "modules/content/ui/Video"

const App = () => {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AdminUi />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <VideoUi />
          </Route>
        </Switch>
    </Router>
  )
}

function Users() {
  return <h2>Users</h2>
}

export default App