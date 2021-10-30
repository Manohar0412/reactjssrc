import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render(props) {
        return (
            <div>
               <h1>::CorporationBank account for Ajay{this.props.info.lastNameS}::</h1> 
            </div>
        )
    }
}
