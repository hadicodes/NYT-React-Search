// Include React
var React = require("react");

// Results component
var Results = React.createClass({
  getInitialState: function () {
    return {title: "", url: "", publishedDate: ""};

  },
  render: function () {
    return (
      <div className="container">
        <div class="card">
          <h2 class="card-header">Your Results</h2>
          <div class="card-block">
            <h4 class="card-title">{this.state.title}{this.state.url}{this.state.publishedDate}</h4>
          </div>
          <button type="button" class="btn btn-info">Save</button>
        </div>
      </div>
    );
  } 
});

module.exports = Results;
