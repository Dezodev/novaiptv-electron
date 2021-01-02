import React from "react";
import "./App.css";

export default class App extends React.Component {
    /* Constructor
    ------------------------------------------------------------------ */
    constructor() {
        super(...arguments);

        // State
        this.state = {};
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
            <>
                <h1>novaIPTV</h1>
            </>
        );
    }
}
