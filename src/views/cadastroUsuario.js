import React from 'react'

import Card from '../components/cards'
import formGroup from '../components/form-group'

class CadastroUsuario extends React.Component{

    render(){
        return(
            <div className="container">
                <Card title="Cadastro Usuario">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <fieldset>
                                    <h1 style={{fontSize:17}}>Nome: *</h1>
                                    <formGroup htmlFor="exampleInputEmail1" label="Email:">
                                        <input type="email" 
                                            class="form-control"
                                            id="exampleInputEmail1" 
                                            placeholder="Digite o Email"/>
                                    </formGroup>
                                    <br></br>
                                    <h1 style={{fontSize:17}}>Email: *</h1>
                                    <formGroup htmlFor="exampleInputEmail1">
                                        <input type="email" 
                                            class="form-control" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Digite o Email"/>
                                                <small id="emailHelp" class="form-text text-muted">Não divulgamos o seu email.</small>
                                    </formGroup>
                                    <br></br>
                                    <h1 style={{fontSize:17}}>Senha: *</h1>
                                    <formGroup htmlFor="exampleInputPassword1">
                                        <input type="password" 
                                                class="form-control" 
                                                id="exampleInputPassword1" 
                                                placeholder="Password"/>
                                                
                                    </formGroup>
                                    <br></br>
                                    <h1 style={{fontSize:17}}>Repita a Senha: *</h1> 
                                    <formGroup htmlFor="exampleInputPassword1">
                                        <input type="password" 
                                                class="form-control" 
                                                id="exampleInputPassword1" 
                                                placeholder="Password"/>
                                    </formGroup>
                                    <button className="btn btn-success" style={{margin: '2px'}}>Salvar</button>
                                    <button className="btn btn-danger">Voltar</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </Card>     
            </div>
        )
    }
}

export default CadastroUsuario