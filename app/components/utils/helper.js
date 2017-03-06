// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//NYT Search  API
var APIKey = "28262d0f81b84ebf8794f94a1c0487d3";

// Helper Functions
var helpers = {

    // Run Query
    runQuery: function(queryTerm, startYear, endYear) {

        console.log(queryTerm);
        console.log(startYear);
        console.log(endYear);

        var fixedQueryTerm = queryTerm.trim();
        var fixedStartYear = startYear.trim() + "0101";
        var fixedEndYear = endYear.trim() + "1231";

        // Print a log statement
        console.log("Query is being run");

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {

            params: {
                "api-key": APIKey,
                "q": fixedQueryTerm,
                "begin_date": fixedStartYear,
                "end_date": fixedEndYear
            }
        })
        .then (function(results) {
            console.log("Axios Results", results.data.response);
            return results.data.response;
        })

    }
}

// export helpers to use elsewhere
module.exports = helpers;