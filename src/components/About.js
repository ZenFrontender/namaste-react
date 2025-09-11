import User from "./User"
import UserClass from "./UserClass";

const About = () =>{

    

    return(
        <div>
            <h1>About</h1>
            <h2>This is a Namaste React Web Series</h2>
            <User  />
            <p>Class base ccomponent</p>
            <UserClass name={"Kshitij"} contact={5463563533} location="Beyund gola" />
        </div>
    )
}

export default About;