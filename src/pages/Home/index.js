import React, { Component } from 'react'


export default class Home extends Component {

    state = {
        user: ''
    }
    
    async componentDidMount(){
        const user = JSON.parse(localStorage.getItem('@username'))

        this.setState({
            user
        })
    }
    
    render(){
        const { user } = this.state
        return(
            <h1>Bem vindo, {user}! </h1>
        )
    }
}