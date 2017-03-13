// Include the axios package for performing HTTP requests (promise based
// alternative to request)
var axios = require("axios");

//NYT Search  API
var APIKey = "28262d0f81b84ebf8794f94a1c0487d3";

// Helper Functions
var helpers = {
    // Run Query
    runQuery: function (queryTerm, startYear, endYear) {
        var queryTerm = queryTerm.trim();
        var startYear = startYear.trim() + "0101";
        var endYear = endYear.trim() + "1231";

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", 
           {
                params: {
                    "api-key": APIKey,
                    "q": queryTerm,
                    "begin_date": startYear,
                    "end_date": endYear
                }
            })
            .then(function (results) {
                return results.data.response;
            });
    },

    // retrieves saved articles from server
   getSavedArticles: function(){
       return axios.get('/api/saved');
   },
   // adds articles to database
   addSavedArticles: function(article){
       return axios.post('/api/saved', article)
   },
   //deletes articles from db
   deleteSavedArticles: function(id){
       return axios.delete('/api/saved/'+id);
   }    

};

// export helpers to use elsewhere
module.exports = helpers;