// Include React
var React = require("react");


var Results = React.createClass({

 getInitialState: function(){
        return {
            title: "",
            url: "",
            publishedDate: ""
        };

    },



  render: function() {
    return (
      <div className="main-container">
        <div className="card">
  <div className="card-header">{this.props.results} </div>
  <div className="card-block">
    <h4 className="card-title"> Comp: Results Article retrieved  </h4>
    <a href="#" className="btn btn-primary">Save</a>
  </div>
</div>

      </div>
    );
  }
});

module.exports = Results;
