import User from "./User"
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){

        super(props)

        console.log(`Parent constructor is called`);
        

    }


    render(){
    return <div>
            {console.log('Parent render is called')}
            <h1>About</h1>
            <h2>This is a Namaste React Web Series</h2>
            <User  />
            <p>Class base ccomponent</p>
            <UserClass name={"Kshitij"} contact={5463563533} location="Beyond gola" />\
            <UserClass name={"Dabs"} contact={342653533} location="London" />
        </div>
    
    }

    componentDidMount(){
        console.log("Parent componentDidMount is called");
    }

}
export default About;