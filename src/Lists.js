import React, { Component } from 'react';
import List from './List';

class Lists extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            diary,
            editing,
            weekday,
            getdate
        } = this.props;
        let count = 0;
        const diaryList = diary.map(({id, text, done})=> {
            const week = ()=> weekday[this.props.getdate.getDay()-1+count++];
            const getday = ()=> getdate.getDate()+count;

            return (
                <List
                    key={id}
                    text={text}
                    done={done}
                    editing={editing === id}
                    week={()=> week()}
                    getday={()=> getday()}
                    diary={diary}
                />
            )
        });

        return (
            <ul className="diaryLists">
                {diaryList}
            </ul>
        )
    }
}

export default Lists;