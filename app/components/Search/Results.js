// Include React
var React = require("react");
var Result = require("./single-result/result");

// Results component
var Results = React.createClass({
  getInitialState: function () {
    return {title: "", url: "", publishedDate: ""};
  },
  render: function () {
    const numberOfResults = (this.props.results.length)
    return (
      <div className="container">
        <div className="card">
          <h3 className="card-header">Results</h3>
          <div className="card-block">
            <h4 className="card-title">
              {/*No results Message*/}
              {numberOfResults===0 && <p>Sorry it looks like there are not any NYT articles on your current search</p>}
              {this.props.results.map(function(element, index) {
                console.log(element);
                return (
                  <Result key={index} url={element.web_url} title={element.headline.main} publishedDate={element.pub_date}></Result>
                );
              })}
              </h4>
          </div>
        </div>
      </div>
    );
  } 
});

module.exports = Results;
