import React from "react";
import Chat from './Chat';
import './App.css';
import Sidebar from './Sidebar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {

  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (

        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                {/* <Chat /> */}
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
