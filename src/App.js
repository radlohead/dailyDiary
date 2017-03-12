import React, { Component } from 'react';
import axios from 'axios';
import Lists from './Lists';
import Write from './Write';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diary: [],
            writing: null,
            today: new Date(),
            saveText: null,
            YMD: new Date().getFullYear()+''+ (new Date().getMonth()+1) +''+ new Date().getDate()
        }
    }
    componentWillMount(){
        axios.get('./data.json')
            .then(response => {
                this.setState({ diary: response.data.diary });
            });
    }
    handleAddList(){
        const diary = [...this.state.diary];
        if(diary.length >= 1){
            if(diary[diary.length-1].id === this.state.YMD) return alert('일기는 하루에 하나만 쓸수 있습니다.');
        }
        this.setState({
            diary:[...this.state.diary, {
                id: this.state.YMD,
                week: this.state.today.getDay(),
                text: '일기를 쓰시려면 이곳을 클릭해 주세요'
            }]
        });
    }
    handleWriting(id, text){
        this.setState({
            writing: id,
            saveText: text
        });
    }
    handleWriteSave(newText){
        const id = this.state.writing;
        const diary = [...this.state.diary];
        const SaveIndex = diary.findIndex(v=> v.id === id);
        diary[SaveIndex].text = newText;
        this.setState({
            diary: diary
        });
    }
    handleWriteDelete(id){
        const diary = [...this.state.diary];
        const deleteIndex = diary.findIndex(v=> v.id === id);
        diary.splice(deleteIndex, 1);
        this.setState({
            diary: diary
        });
    }
    render() {
        const {
            diary,
            writing,
            today,
            saveText
        } = this.state;
        const weekday = ["SUN", "MON", "TUS", "WEN", "THR", "FRI", "SAT"];
        const filter = this.props.routeParams.filter;
        const lists = () => {
            if(filter === 'Write') return;
            return (
                <Lists
                    today={today}
                    weekday={weekday}
                    diary={diary}
                    filter={filter}
                    writing={writing}
                    handleWriting={(id, text)=> this.handleWriting(id, text)}
                    handleWriteDelete={(id)=> this.handleWriteDelete(id)}
                />
            );
        };
        const footer = () => {
            if(filter === 'Write') return;
            return (
                <Footer
                    filter={filter}
                    handleAddList={()=> this.handleAddList()}
                />
            );
        };
        const write = () => {
            if(filter !== 'Write') return;
            return (
                <Write
                    diary={diary}
                    saveText={saveText}
                    handleWriteSave={(v)=> this.handleWriteSave(v)}
                />
            )
        };

        return (
            <div className="wrap">
                {lists()}
                {write()}
                {footer()}
            </div>
        )
    }
}

export default App;