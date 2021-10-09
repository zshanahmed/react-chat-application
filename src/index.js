import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import App from "./App";
import SignupForm from "./components/SignupForm";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/login" render={() => <App/>}/>
            <Route exact path="/signup" render={()=> <SignupForm/>}/>
            <Redirect from="/" to="/login"/>
        </Switch>
    </Router>,
    document.getElementById("root")
);