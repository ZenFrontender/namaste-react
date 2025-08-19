import React from "react";
import ReactDOM from "react-dom/client"



const heading = <h1 id="heading">Namaste React</h1>

const elem = <span>React Element</span>

const title = (
    <h1 className="head">
        {elem}
        Namaste React using JSX
    </h1>
)

const Title = () => (
    <h1 className="head">
        {elem}
        Namaste React using JSX components
    </h1>
)

//component composition
const HeadingComponent = () =>(
    <div id="container">
        {title} // React elem - JS object 
        <Title /> React component - JS function
        {Title()}
        <h1>Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)