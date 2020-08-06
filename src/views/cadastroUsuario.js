import React from 'react'

import Card from '../components/cards'
import formGroup from '../components/form-group'

import { withRouter } from 'react-router-dom'

class CadastroUsuario extends React.Component{

    
    state ={
        nome: '',
        email: '',
        senha: '',
        repetirSenha: ''
    }

    cadastrar = () => {

        console.log('Nome: ', this.state.nome)
        console.log('Email: ', this.state.email)
        console.log('senha: ', this.state.senha)
        console.log('repetirSenha: ', this.state.repetirSenha)
    }

    voltaTelaDeLogin = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
            <Card title="Cadastro Usuario">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <fieldset>
                                <h1 style={{fontSize:17}}>Nome: *</h1>
                                <formGroup htmlFor="inputName" label="Email:">
                                    <input type="email" 
                                        value={this.state.nome}
                                        onChange={e => this.setState({nome: e.target.value})}
                                        className="form-control"
                                        id="inputName" 
                                        placeholder="Digite o Email"/>
                                </formGroup>
                                <br></br>
                                <h1 style={{fontSize:17}}>Email: *</h1>
                                <formGroup htmlFor="inputEmail">
                                    <input type="email"
                                        value={this.state.email}
                                        onChange={e => this.setState({email: e.target.value})}  
                                        className="form-control" 
                                        id="inputEmail" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Digite o Email"/>
                                            <small id="emailHelp" class="form-text text-muted">Não divulgamos o seu email.</small>
                                </formGroup>
                                <br></br>
                                <h1 style={{fontSize:17}}>Senha: *</h1>
                                <formGroup htmlFor="inputSenha">
                                    <input type="password" 
                                            value={this.state.senha}
                                            onChange={e => this.setState({senha: e.target.value})}
                                            className="form-control" 
                                            id="inputSenha" 
                                            placeholder="Password"/>                            
                                </formGroup>
                                <br></br>
                                <h1 style={{fontSize:17}}>Repita a Senha: *</h1> 
                                <formGroup htmlFor="inputRepetirSenha">
                                    <input type="password" 
                                            value={this.state.repetirSenha}
                                            onChange={e => this.setState({repetirSenha: e.target.value})}
                                            className="form-control" 
                                            id="inputRepetirSenha" 
                                            placeholder="Password"/>
                                </formGroup>
                                <button onClick={this.cadastrar} className="btn btn-success" style={{margin: '2px'}}>Salvar</button>
                                <button onClick={this.voltaTelaDeLogin} className="btn btn-danger">Voltar</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </Card>     
        )
    }
}

export default withRouter (CadastroUsuario);