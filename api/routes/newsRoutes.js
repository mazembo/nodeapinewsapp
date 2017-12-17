// author mazembo mavungu mazemb_eddy@yahoo.fr
// this is an api code for newsapi
// It interfaces our mongodb data and is expected to be consumed by front end clients
'use strict';
module.exports = function(app){
  var manageArticles = require('../controllers/newsController');

  //ManageArticles Routes

  app.route('/articles')
    .get(manageArticles.list_all_articles)
    .post(manageArticles.create_an_article);

  app.route('/articles/:articleId')
    .get(manageArticles.read_an_article)
    .put(manageArticles.update_an_article)
    .delete(manageArticles.delete_an_article);
};
