// author mazembo mavungu mazemb_eddy@yahoo.fr
// this is an api code for newsapi
// It interfaces our mongodb data and is expected to be consumed by front end clients
'use strict';
var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.list_all_articles = function(req, res) {
  Article.find({}, function(err, article){
    if (err)
      res.send(err);
    res.json(article);

  });
};

exports.create_an_article = function(){
  var new_article = new Article(req.body);
  new_task.save(function(err, article){
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.read_an_article = function(req, res) {
  Article.findById(req.params.articleId, function(err, article){
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.update_an_article = function(req, res){
  Article.findOneAndUpdate({_id: req.params.articleId}, req.body, {new: true}, function(err, article){
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.delete_an_article = function(req, res){
  Article.remove({_id: req.params.articleId}, function(err, article){
    if (err)
      res.send(err);
    res.json({message: "Article successfully deleted"});
  });
}
