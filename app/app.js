//React Main dependencies
var React = require("react");
var ReactDom = require("react-dom");

//imports  Main component
var Main = require("")


// Grabs the Routes
var routes = require("./config/routes");

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
