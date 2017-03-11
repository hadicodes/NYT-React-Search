// Include React
var React = require("react");
var helpers = require("../utils/helper");

var Query = React.createClass({
getInitialState: function(){
        return {
            queryTerm: "Mike Tyson",
            "startYear": "2008",
            "endYear": "2012",
            "results": {}
        };
    },
  render: function() {
    return (
      <div className="container">
        <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Search Topic</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type a topic" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Start Year</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">End Year</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
            </div>
              <button type="submit" className="btn btn-success">Search</button>
        </form>
      </div>
    );
  }
});

module.exports = Query;
