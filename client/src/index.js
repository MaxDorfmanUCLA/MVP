import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.js'

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Form />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;