import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/home.js'
import About from './pages/about.js'

export default class App extends React.Component {
    /* Constructor
    ------------------------------------------------------------------ */
    constructor() {
        super(...arguments)

        // State
        this.state = {}
    }

    /* Components events
    ------------------------------------------------------------------ */
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {}

    /* Render
    ------------------------------------------------------------------ */
    render() {
        return (
            <Router>
                <div id="main">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
