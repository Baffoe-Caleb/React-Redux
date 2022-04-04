import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import { Provider } from 'react-redux'
import { store, persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import RandomJoke from "./RandomJoke";
import CategoryRandomJoke from "./CategoryRandomJoke";

function App() {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App">
            <Navbar />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/randomJoke" component={RandomJoke}>
              </Route>
              <Route exact path="/categoryRandomjoke" component={CategoryRandomJoke}>
              </Route>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
