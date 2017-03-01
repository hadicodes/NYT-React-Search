// Require mongoose orm
var mongoose = require("mongoose");
// Create Schema object constructor
var Schema = mongoose.Schema;

// Create an article schematic to define the rules of the articles beings
// scraped.
var ArticleSchema = new Schema({
  // Title is a required field and also unique
  title: {
    type: String,
    required: true,
    unique: true
  },
  // articleSnippet is a required string and also unique to prevent duplicates
  date: {
    type: Date,
    required: true
  },
  // link is a required string and also unique to prevent duplicates
  url: {
    type: String,
    required: true,
    unique: true
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Exports the model
module.exports = Article;
