import React, { Component } from 'react';
import axios from 'axios';
import Lists from './Lists';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            diary: []
        }
    }
    componentWillMount(){
        axios.get('./data.json')
            .then(response => {
                this.setState({ diary: response.data.diary });
            })
    }
    render() {
        return (
            <div className="wrap">
                <Lists/>
                <Footer/>
            </div>
        )
    }
}

export default App;