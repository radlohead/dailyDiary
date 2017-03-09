import React, { Component } from 'react';
import axios from 'axios';
import Lists from './Lists';
import Footer from './Footer';

const newId = () => Date.now();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diary: [
                {"id": 1000, "text": "하루 한줄 일기"},
                {"id": 1001, "text": "추가를 누르면 일기를 쓰실 수 있습니다."},
                {"id": 1002, "text": "매일매일 일기를 써보세요"}
            ],
            editing: null
        }
    }
    componentWillMount(){
        // axios.get('./data.json')
        //     .then(response => {
        //         this.setState({ diary: response.data.diary });
        //     });
    }
    handleAddList(){
        this.setState([...this.state.diary, {
            id: newId,
            text: ''
        }])
    }
    render() {
        const {
            diary,
            editing
        } = this.state;
        let getdate = new Date();
        const weekday = ["MON", "TUS", "WEN", "THR", "FRI", "SAT", "SUN"];
        const filter = this.props.routeParams.filter;

        return (
            <div className="wrap">
                <Lists
                    getdate={getdate}
                    weekday={weekday}
                    diary={diary}
                    filter={filter}
                    editing={editing}
                />
                <Footer
                    handleAddList={()=> this.handleAddList()}
                />
            </div>
        )
    }
}

export default App;