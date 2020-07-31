import React from 'react'

function formGroup(props){

    return(
        <div className="form-group">
            <label htmlFor={props.htmlFor} >{props.name}
                <h2 className="email">{this.props.title}</h2>
            </label>
            {props.children}
        </div>
    )
}

export default formGroup