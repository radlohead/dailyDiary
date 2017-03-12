import React, { Component } from 'react';
import { Link } from 'react-router';

class Write extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this._writeText.value = this.props.saveText;
    }
    handleWriteClick(){
        const val = this._writeText.value;
        this.props.handleWriteSave(val);
    }
    render() {
        const {
            diary
        } = this.props;
        const today = new Date();
        const weekday = ["SUN", "MON", "TUS", "WEN", "THR", "FRI", "SAT"];
        const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        return (
            <div className="write">
                <header className="header">
                    <h1>
                        <span>{weekday[today.getDay()]}</span>{'/'}
                        <span>{month[today.getMonth()]}</span>{'/'}
                        <span>{today.getDate()}</span>{'/'}
                        <span>{today.getFullYear()}</span>
                    </h1>
                </header>
                <textarea
                    name="write" className="writeText" cols="30" rows="10"
                    ref={ref=> {this._writeText = ref; }}
                />
                <Link to="/">
                    <button
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent writeBtn"
                        onClick={()=> this.handleWriteClick()}
                    >
                        write
                    </button>
                </Link>
            </div>
        )
    }
}

export default Write;