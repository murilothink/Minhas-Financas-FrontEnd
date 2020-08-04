import React from 'react'


function NavbarIntem (props){

    return(

        <li className="nav-item">
            <a style={{margin: "10px"}} className="nav-link" href={props.href}>{props.label}</a>
        </li>
    
    )
}

export default NavbarIntem