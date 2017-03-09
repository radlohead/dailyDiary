import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        const {
            handleAddList
        } = this.props;
        return (
            <footer className="footer">
                <span className="btns">
                    <button
                        className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored addBtn"
                        onClick={handleAddList}
                    >
                      <i className="material-icons">add</i>
                    </button>
                </span>
            </footer>
        )
    }
}

export default Footer;