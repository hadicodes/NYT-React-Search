// Include React
var React = require("react");

// All Saved component
var Saved = React.createClass({
    getInitialState: function () {},
    render: function () {
        return (
            <div className="main-container">
                <div className="card">
                    <div className="card-header">Saved Articles
                    </div>
                    <div className="card-block">
                        <h4 className="card-title">
                            Comp: Results Article retrieved
                        </h4>
                    </div>
                </div>

            </div>
        );
    }
});

module.exports = Saved;
