import React from 'react'

export default class Home extends React.Component {
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
            <>
                <div id="page-content">
                    <h1>Home</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloremque, architecto saepe voluptas veritatis fugiat asperiores fugit quae in, blanditiis modi reprehenderit earum, inventore ad fuga praesentium. Obcaecati, ipsa, rerum.
                    </p>
                    <p>Veniam perspiciatis maiores vitae recusandae et dolorum nulla saepe architecto aliquid tempora, accusantium, possimus cum. Odit dolor praesentium unde hic incidunt, tenetur perspiciatis aperiam repellat ducimus vitae possimus dolorem quae.
                    </p>
                    <p>Animi eum debitis sunt id rerum possimus. Eveniet eos, culpa nemo impedit laborum quisquam eaque eligendi voluptas illum repudiandae rem id dolore dolorum maiores, magnam dolor accusantium, numquam officiis. Inventore.
                    </p>
                </div>
            </>
        )
    }
}
