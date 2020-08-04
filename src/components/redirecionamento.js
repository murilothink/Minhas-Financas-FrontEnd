import React from 'react'


class Redirecionamento extends React.Component{

    state = {
        redirect: false 
    }

    chamaLogin = () => {
    this.setState({
    redirect: true
        })
    }
    
    render(){
        return(
            <div className="card mb-3">
                <h3 className="card-header">{this.props.title}</h3>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>

        )
    }
}

export default Card