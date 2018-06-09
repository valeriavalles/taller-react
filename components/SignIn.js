import React from 'react'

 export class SignIn  extends React.Component {

    emailRef = React.createRef()
    passRef = React.createRef()

    user = {}

    asignUser = (props) => {
        const emailValue = this.emailRef.current.value;
        const passValue = this.passRef.current.value
        this.user = {
            email: emailValue,
            password: passValue
        }
        props.setName(this.user)
    }

 render(){
    return(
        <div>
          <span>Correo Electronico</span>
          <input type="email" ref={this.emailRef}/>
          <br/>
          <span>Contraseña</span>
          <input type="password" ref={this.passRef}/>
          <br/>
          <button onClick={()=>{this.asignUser(this.props)}} >click</button>
        </div>
    )
 }
    
}

 