"use strict"

const commentController = require('../Controllers/commentController');

function routeComments(app){
    app.route('/comments')
        .get(commentController.getAllComments)
        .post(commentController.addComment);

    app.route('/comments/:UserReviewID')
        .get(commentController.getAllCommentsbyReviewID)
        .delete(commentController.deleteComment);

    app.route('/comments/edit/:anId')
        .put(commentController.updateFromReviewID);

    app.route('/comments/account/:AccountID')
        .get(commentController.getAllCommentsbyAcount);

    app.route('/comments/game/:GameID')
        .get(commentController.getAllCommentsbyGame);

    app.route('/comments/upvote/:UserReviewID')
        .put(commentController.upvoteCommen);
    
    app.route('/comments/downvote/:UserReviewID')
        .put(commentController.downvoteCommen);
}

module.exports = {routeComments};