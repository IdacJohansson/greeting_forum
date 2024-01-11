import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Page1 from "./modules/Page1";
import Page2 from "./modules/Page2";
import "./App.css"

function App() {
    return (
        <>
            <Router>
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
                </Switch>
            </Router>
        </>
    );
}

export default App;
