// create your App component here
import React, { Component } from 'react';

export class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
       return data
      })
  
    }
}

export default App;
