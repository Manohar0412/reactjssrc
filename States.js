import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"::Guna::"
        }
    }
    
    render() {
       setTimeout(()=>{
           this.setState({name:"allu arjun"})
       },300)
       
       
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
            </div>
        )
    }
}
