import React from 'react'


export default function Form (props) {
    const {
        name,
        value,
    }  = props
    return (
    <div>
        <h1>ALIVE</h1>
        <h2>{props.name} {props.value}</h2>
     </div>
    )
}