"use strict"

const criticController = require('../Controllers/criticController');

function routeCriticReview(app){
    app.route('/criticreviews')
        .get(criticController.getAllReviews)
        .post(criticController.addReview);

    app.route('/criticreviews/game/:gameid')
        .get(criticController.getReviewsByGame);

    app.route('/criticreviews/:id')
        .get(criticController.getrevieWhere)
        .put(criticController.updateReview)
        .delete(criticController.deleteReview);
}

module.exports = {routeCriticReview};