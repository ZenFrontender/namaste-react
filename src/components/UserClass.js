import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2: 1
        }
        console.log(`${this.props.name} constructor is called`);
        
        
    }

    render(){
        return <div className="user-card">
            {console.log(`${this.props.name} render is called`)}
        <h3>{this.props.name}</h3>
        <h4>Learning react</h4>
        <h4>Count 1: {this.state.count} Count 2: {this.state.count2}</h4>
        <h4>Contact: {this.props.contact}</h4>
        <h4>Location: {this.props.location}</h4>
        <button onClick={()=>this.setState({count: this.state.count+1})}>Add Count</button>
    </div> 
    }

    componentDidMount(){
        console.log(`${this.props.name} component did mount called`)
    }
    
}

export default UserClass;