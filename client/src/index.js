import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.js';
import List from './components/list.js';
import Signup from './components/signup.js';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: 'signup'
        }
    }
    render() {
        var pageComponent = <div></div>
        if (this.state.page === 'signup') {
            pageComponent =  <Signup />
        } else {
            pageComponent =  
            <div>
                <Form />
                <List />
            </div>
        }
        return (
            pageComponent
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;