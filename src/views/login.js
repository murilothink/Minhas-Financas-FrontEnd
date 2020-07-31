import React from 'react'

import Card from '../components/cards'
import formGroup from '../components/form-group'

class Login extends React.Component{

    state ={
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email: ', this.state.email)
        console.log('senha: ', this.state.senha)
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left:'300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <h1 style={{fontSize:17}}>Email: *</h1>
                                                <formGroup htmlFor="exampleInputEmail1" label="Email:">
                                                    <input type="email"
                                                            value={this.state.email}
                                                            onChange={e => this.setState({email: e.target.value})} 
                                                            class="form-control" 
                                                            id="exampleInputEmail1" 
                                                            aria-describedby="emailHelp" 
                                                            placeholder="Digite o Email"/>
                                                </formGroup>
                                                <br></br>
                                                <h1 style={{fontSize:17}}>Senha: *</h1>
                                                <formGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                    <input type="password"
                                                            value={this.state.senha}
                                                            onChange={e => this.setState({senha: e.target.value})}  
                                                            class="form-control" 
                                                            id="exampleInputPassword1" 
                                                            placeholder="Password"/>
                                                </formGroup>
                                                <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                                <button className="btn btn-danger">Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login