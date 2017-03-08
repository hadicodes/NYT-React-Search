// Include React
var React = require("react");
var Search = require("./Search");
var Results = require("../components/Search/Results");


var Main = React.createClass({

getInitialState: function() {
        return {
           results: {"title": "hadi1"}
        };
},

  render: function() {
// console.log("Render results", this.state.results);
    return (
      <div className="main-container">
        {/*Navbar*/}
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
          <p className="navbar-brand">NYT Search</p>
        </nav>
        {/*Jumbotron*/}
        <div className="jumbotron">
          <h1 className="display-3">New York Times Article Scrubber</h1>
          <p className="lead">Search for any NYT article between two dates</p>
          <hr className="my-4" /> 
        </div>
      
      
      {/*Search panel*/}
      {this.props.children}
      
      </div>
    )
  }
});


module.exports = Main;
