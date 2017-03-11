// Dependencies
var React = require("react");

// Includes its children: Query and Results
var Query = require("./Search/Query");
var Results = require("./Search/Results");
var helpers = require("./utils/helper");

var Search = React.createClass({
 getInitialState: function(){
        return {
            queryTerm: "Mike Tyson",
            "startYear": "2008",
            "endYear": "2012",
            "results": {}
        };
    },
// Axios helper query
componentDidMount: function(){
helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear).then(function (data){
  this.setState({results: data.docs})
}.bind(this));
},
render: function(){
        console.log("Rendering the Search Component");
        return (
            <div className="container">
                <Query />
                <Results results= {this.state.results}/>
            </div>
        )
    }
})

module.exports = Search;