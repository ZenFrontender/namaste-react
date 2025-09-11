import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        
    }

    render(){
        return <div className="user-card">
        <h3>{this.props.name}</h3>
        <h4>Learning react</h4>
        <h4>Contact: {this.props.contact}</h4>
        <h4>Location: {this.props.location}</h4>
    </div> 
    }
    
}

export default UserClass;