// author mazembo mavungu mazemb_eddy@yahoo.fr
// this is an api code for newsapi
// It interfaces our mongodb data and is expected to be consumed by front end clients
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  message: {
    type: String
  },
  short_message: {
    type: String
  },
  tweet_message: {
    type: String
  },
  picture: {
    type: String
  },
  original_url: {
    type: String
  },
  lecongolais_url: {
    type: String
  },
  date_published: {
    type: Date,
    default: Date.now
  },
  date_accessed: {
    type: Date,
    default: Date.now
  },
  categories: {
    type: String
  }
});
module.exports = mongoose.model('Article', ArticleSchema);
