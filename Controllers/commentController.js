"use strict";

const CommentsDB = require('../models/commentsDB');
const Comment = require('../models/comments');

var commentsDB = new CommentsDB();

function getAllComments (request, respond){ //done
    commentsDB.getAllComments(function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function addComment (request, respond){ //done
    var now = new Date();
    var comment = new Comment(null, request.body.UserReviewDesc, null, null, request.body.AccountID, request.body.GameID,now.toString());
    var msg = ""
    commentsDB.addComment(comment, function(error, result){
        if (error){
            msg = "cannot";
            console.log(msg);
            respond.json(error);
        }
        else{
            msg = "can";
            console.log(msg);
            respond.json(result);
        }
    });
}

function getAllCommentsbyReviewID (request, respond){ //done

    var reviewid = request.params.UserReviewID;

    commentsDB.getCommentByUserReviewID(reviewid, function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function getAllCommentsbyAcount (request, respond){ //done

    var accountid = request.params.AccountID;

    commentsDB.getCommentByAccountID(accountid, function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function getAllCommentsbyGame (request, respond){ //done

    var gameid = request.params.GameID;
    
    commentsDB.getCommentByGameID(gameid, function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function updateFromReviewID (request, respond){ //done
    var now = new Date();
    var comment = new Comment(parseInt(request.params.anId), request.body.UserReviewDesc, now.toString());

    commentsDB.updateCommentByReview(comment, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function updateComment (request, respond){ //done
    var now = new Date();
    var comment = new Comment(parseInt(request.params.UserReviewID), request.body.UserReviewDesc, request.body.UserReviewDate, request.body.UserReviewUpvote, request.body.AccountID, request.body.GameID, now.toString());

    commentsDB.updateComment(comment, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function upvoteCommen (request, respond){ //done
    
    var comment = request.params.UserReviewID

    commentsDB.upvoteComment(comment, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function downvoteCommen (request, respond){ //done
    
    var comment =request.params.UserReviewID

    commentsDB.downvoteComment(comment, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment (request, respond){ //done
    var commentID = request.params.UserReviewID;
    commentsDB.deleteComment (commentID, function(error, result){
        if (error){
            respond.json (error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllComments, getAllCommentsbyAcount, getAllCommentsbyGame, addComment, getAllCommentsbyReviewID, updateFromReviewID, upvoteCommen, downvoteCommen, deleteComment};