import React, { Component } from 'react';
import List from './List';

class Lists extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            diary,
            writing,
            weekday,
            today,
            filter,
            handleWriting,
            handleWriteDelete
        } = this.props;

        const diaryList = diary.map(({id, text, week}) => {
            return (
                <List
                    key={id}
                    text={text}
                    weekday={weekday}
                    id={id}
                    diary={diary}
                    today={today}
                    week={week}
                    writing={writing === id}
                    filter={filter}
                    handleWriting={()=> handleWriting(id ,text)}
                    handleWriteDelete={()=> handleWriteDelete(id)}
                />
            );
        });

        return (
            <ul className="diaryLists">
                {diaryList}
            </ul>
        )
    }
}

export default Lists;