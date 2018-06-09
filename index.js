
import React from 'react';
import { render } from 'react-dom';
// import { HelloWorld } from './components/hello'
import { SignIn } from './components/SignIn'

class App extends React.Component {

    

    state = {
        name: "valeria",
        email:"",
        password:""
    }

    changeName = () => {
     this.setState({
         name:"valles"
     })
    }
    
    setName = (user) => {
        this.setState({
            email: user.email,
            password: user.password
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                {/* {this.state.email !== '' && <h3>{this.state.email}</h3>} */}
                 <h2>{this.state.email}</h2> 
                <h2>{this.state.password}</h2>
                <SignIn 
                   name={this.name} 
                   changeName={this.changeName} 
                   setName= {this.setName}/>
            </div>
           
        )
    }
}

const mount = document.querySelector('#App')

render(< App/>, mount)
