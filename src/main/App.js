import React from 'react';
import CadastroUsuario from '../views/cadastroUsuario'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

import Rotas from './rotas'

class App extends React.Component {

  render(){
    return(
      <div>
              <Rotas/>
      </div>
    );
  }
}

export default App;