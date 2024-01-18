import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Page1 from "./modules/Page1";
import Page2 from "./modules/Page2";
import Page3 from "./modules/Page3";
import Navbar from "./modules/Navbar";
import "./App.css"


function App() {
    return (
                <Router>
                    <Navbar />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Page1}
                        />

                        <Route
                            exact
                            path="/preview"
                            component={Page2}
                        />

                        <Route
                            exact
                            path="/greetings"
                            component={Page3}
                        />
                    </Switch>
                </Router>
    );
}

export default App;
