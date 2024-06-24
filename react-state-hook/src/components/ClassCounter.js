import React from 'react'

class ClassCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    increamentCount = ()=>{
        this.setState({
            count:this.state.count + 1 
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.increamentCount}>Button {this.state.count} Clicked </button>
            </div>
        )
    }
}

export default ClassCounter;