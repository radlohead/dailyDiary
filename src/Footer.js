import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <footer className="footer">
                <span className="btns">
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                      <i className="material-icons">add</i>
                    </button>
                </span>
            </footer>
        )
    }
}

export default Footer;