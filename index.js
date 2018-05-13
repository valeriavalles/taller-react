
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render(){
        return(<h1>Hola Mundo</h1>)
    }
}

const mount = document.querySelector('#App')

render(< App/>, mount)
