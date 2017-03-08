import React, { Component } from 'react';
import List from './List';

class Lists extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ul className="diaryLists">
                {/*<List />*/}
                <li className="diaryList">
                    <div className="dates">
                        <span className="day">WED</span>
                        <span className="date">9</span>
                    </div>
                    <span className="lineText">
                        2017년 3월 9일 수요일 날씨 맑음 React와 handlebars를 이용해서 한줄 일기를 만들어봤음
                        2017년 3월 9일 수요일 날씨 맑음 React와 handlebars를 이용해서 한줄 일기를 만들어봤음
                    </span>
                </li>
                <li className="diaryList">
                    <div className="dates">
                        <span className="day">WED</span>
                        <span className="date">9</span>
                    </div>
                    <span className="lineText">
                        2017년 3월 9일 수요일 날씨 맑음 React와 handlebars를 이용해서 한줄 일기를 만들어봤음
                        2017년 3월 9일 수요일 날씨 맑음 React와 handlebars를 이용해서 한줄 일기를 만들어봤음
                    </span>
                </li>
                <li className="diaryList">
                    <div className="dates">
                        <span className="day">WED</span>
                        <span className="date">9</span>
                    </div>
                    <span className="lineText">
                        2017년 3월 9일 수요일 날씨 맑음 React와 handlebars를 이용해서 한줄 일기를 만들어봤음
                        2017년 3월 9일 수요일 날씨 맑음 React와 handlebars를 이용해서 한줄 일기를 만들어봤음
                    </span>
                    <button className="closeBtn"></button>
                </li>
            </ul>
        )
    }
}

export default Lists;