"use strict";

const CriticReviewDB = require('../models/CriticReviewDB');
const CriticReview = require('../models/CriticReview');

var criticreviewDB = new CriticReviewDB();

function getAllReviews (request, respond){ //done
    criticreviewDB.getAllCriticReview(function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function getReviewsByGame (request, respond){ //done
    var q = request.params.gameid
    criticreviewDB.getCriticReviewbyGame(q, function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function addReview (request, respond){ 
    var now = new Date();
    var review = new CriticReview(null, request.body.CriticName, request.body.CriticRating, request.body.CriticDesc, request.body.CriticLink, request.body.CriticDate, request.body.GameId1,now.toString());

    criticreviewDB.addComment(review, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrevieWhere (request, respond){
    var criticID =  request.params.id;
    criticreviewDB.getReviewWhere (criticID, function(error, result){
        if (error){
            respond.json(error);
        } else{
            respond.json(result);
        }
    });
}

function updateReview (request, respond){ 
    var now = new Date();
    var review = new CriticReview(parseInt(request.params.id), request.body.CriticName, request.body.CriticRating, request.body.CriticDesc, request.body.CriticLink, request.body.CriticDate, request.body.GameId1, now.toString());

    criticreviewDB.updateReview(review, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview (request, respond){ 
    var criticID = request.params.id;
    criticreviewDB.deleteReview (criticID, function(error, result){
        if (error){
            respond.json (error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllReviews, getReviewsByGame, addReview, getrevieWhere, updateReview, deleteReview};