// Dependencies
var React = require("react");
// Includes its children: Query and Results
var Query = require("./Search/Query");
var Results = require("./Search/Results");
//Helper which makes AJAX requests to the NYT API
var helpers = require("./utils/helper");

var Search = React.createClass({
    getInitialState: function () {
        return {query: "", startYear: "", endYear: "", results: []};
    },
    // Query was made
    runSearch: function (query, startYear, endYear) {
        // Axios helper query
        helpers
            .runQuery(query, startYear, endYear)
            .then(function (data) {
                if (data !== this.state.results) {
                    this.setState({results: data.docs})
                }
            }.bind(this));
    },
    //Render Function
    render: function () {
        console.log("Rendering the Search Component");
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <Query runSearch={this.runSearch}/>
                </div>
                <div className="col-sm-12 col-md-8">
                    <Results results={this.state.results}/>
                </div>
                </div>
            </div>
        )
    }
})

module.exports = Search;