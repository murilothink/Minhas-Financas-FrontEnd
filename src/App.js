import React from 'react';
import CadastroUsuario from './views/cadastroUsuario'

//import Login from './views/login'

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

class App extends React.Component {

  render(){
    return(
      <div>
              <CadastroUsuario/>
      </div>
    );
  }
}

export default App;
