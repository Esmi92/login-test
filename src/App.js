import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './view/Home'
import Login from './view/Login'
import Create from './view/Create'

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path = "/home" component={Home}/>
        <Route exact path = "/" component={Login}/>
        <Route exact path = "/create" component={Create}/>
      </Switch>
    </Router>
  )
}

export default App;
