/*
<div id="parent">
    <div id="child">
        <h1> I'm h1 tag </h1>
        <h2> I'm h2 tag </h2>
    </div>
    <div id="child2">
        <h1> I'm h1 tag </h1>
        <h2> I'm h2 tag </h2>
    </div>
</div>


*/


const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div",{id: "child"}, [
    React.createElement("h1",{}, "I'm h1 tag"),React.createElement("h2",{}, "I'm h2 tag")]),
    React.createElement("div",{id: "child2"}, [
    React.createElement("h1",{}, "I'm h1 tag"),React.createElement("h2",{}, "I'm h2 tag")])]);






// const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
        // creating an React element using React
        // react elements are JS objects

        // we need to tell react where is the root element  to render React stuff in index.html file 
        const root = ReactDOM.createRoot(document.getElementById("root"));
        // so we had a div element which we made as a Root element by react so that react knows where to render React./ run react

        root.render(parent);

        // render method will take the JS object, covert it into an HTML element and put it on the dom