import React, { Component } from 'react';
import { Link } from 'react-router';
import ClassNames from 'classnames';

class List extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const text = this._writeText.innerHTML;
        const writeTextChild = this._writeText.childNodes[0];
        if(text.length > 78) return;
        writeTextChild.style.marginTop = 10+'px';
        writeTextChild.style.fontSize = 16+'px';
    }
    render() {
        const {
            text,
            id,
            weekday,
            week,
            writing,
            filter,
            handleWriting,
            handleWriteDelete
        } = this.props;

        const oneId = id.substr(id.length - 1, 1);
        const twoId = id.substr(id.length - 2, 2);
        const day = id.substr(id.length-2, 1) === "0" ? oneId : twoId;
        const dayWeek = weekday[week];

        return (
            <li className={ClassNames('diaryList', {
                writing: writing
            })}>
                <div className="dates">
                    <span className="day">{dayWeek}</span>
                    <span className={ClassNames('date', {
                        holiday: dayWeek === 'SAT' || dayWeek === 'SUN'
                    })}>{day}</span>
                </div>
                <div
                    className="diary-view__text"
                    onClick={handleWriting}
                    ref={ref=> {this._writeText = ref; }}
                >
                    <Link
                        to="/Write"
                        className={ClassNames('writeText', {
                            'selected': filter === 'Write'
                        })}
                    >
                        {text}
                    </Link>
                </div>
                <button
                    className="closeBtn"
                    onClick={handleWriteDelete}
                />
            </li>
        )
    }
}

export default List;