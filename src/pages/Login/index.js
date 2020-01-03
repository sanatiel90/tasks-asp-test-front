import React, { Component } from 'react'
import { Container, Form } from './styles'
import api from './../../services/api'

export default class Login extends Component {

    state = {
        login: '',
        password: '',
        errorMsg: ''
    }
    
    handleLogin = async event => {
        event.preventDefault()

        const { login, password } = this.state
        
        try{
            const response = await api.post('/sessions', {
                login,
                password
            } )
    
            const { user, token } = response.data;

            localStorage.setItem('@username', JSON.stringify(user))
            localStorage.setItem('@token', JSON.stringify(token))

            this.setState({
                login: '',
                password: '',
                errorMsg: ''
            })

        }catch(err){
            const errorData = err.response.data.error 
            this.setState({ 
                errorMsg: errorData
             })
        }   
    }
    
    render(){
        const { login, password, errorMsg } = this.state
        return(
            <Container>
               <h1>Gerenciador de Tarefas</h1>
               <Form error={errorMsg} >
                    { errorMsg && <span>{ errorMsg }</span> }
                    <input onChange={e => this.setState({ login: e.target.value })} value={ login } type="text" placeholder="Usuário" />
                    <input onChange={e => this.setState({ password: e.target.value })} value={ password } type="password" placeholder="Senha" />
                    <button onClick={this.handleLogin} type="button">Entrar</button>
                </Form> 
            </Container>
        )
    }
}