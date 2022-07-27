import './NavIten.css'
import React from 'react'

export default props => 
<a className='navIten' href={props.link}><i className={`fa fa-${props.icon}`}></i>{props.botao}</a>