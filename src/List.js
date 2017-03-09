import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(){
        // this._lineText.value = this.props.diary[0].text;
    }
    render() {
        const {
            diary,
            text,
            done,
            editing
        } = this.props;

        return (
            <li className="diaryList">
                <div className="dates">
                    <span className="day">{this.props.week()}</span>
                    <span className="date">{this.props.getday()}</span>
                </div>
                <div className="diary-view__text">
                    {text}
                </div>
                <input
                    className="lineText"
                    type="text"
                    ref={ref=> { this._lineText = ref; }}
                />
                <button className="closeBtn"></button>
            </li>
        )
    }
}

export default List;