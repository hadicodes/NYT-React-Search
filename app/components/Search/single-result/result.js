// Include React
var React = require("react");
// Helpers for AJAX requests to NYT API
var helpers = require("../../utils/helper");

var Result = React.createClass({
    getInitialState: function(){
        return {url:'', title:'', publishedDate: ''};
    },
    // Saves article
    handleSave: function(event){
        event.preventDefault();
        var article = {
            title: this.state.title,
            url: this.state.url,
            date: this.state.publishedDate
        };
        helpers.addSavedArticles(article);
    },
    componentDidMount: function(){
        this.setState({url:this.props.url, title:this.props.title, publishedDate:this.props.publishedDate});
    },
    render: function(){
        return (
            <div>
                <button className="btn btn-primary btn-xs pull-right" onClick={this.handleSave}>Save</button>
                <a href={this.state.url} target="_blank"><p>{this.state.title}</p></a>
                <hr />
            </div>
        );
    }
});

module.exports = Result;