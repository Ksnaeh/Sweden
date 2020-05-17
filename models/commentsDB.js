"use strict";

var db = require('../db-connection');
class commentsDB{
    getAllComments(callback){ //done
        var sql = 'SELECT a.UserReviewID, b.Username, a.UserReviewDesc, a.UserReviewDate, a.UserReviewUpvote, c.GameName, date_format(UserReviewDate, "%d/%m/%Y") as UserReviewDate FROM gamereview.userreview AS a INNER JOIN account AS b ON b.AccountID = a.AccountID INNER JOIN gameinfo AS c ON c.GameID = a.GameID group by a.UserReviewID';
        db.query(sql, callback);
    }
    addComment (comment, callback){ //done
        //var abc = "Select AccountID from account where Username = 'Temasek'";
        var sql = "INSERT INTO userreview (UserReviewDesc, UserReviewDate, UserReviewUpvote, AccountID, GameID) VALUES (?, CURRENT_DATE(), 0, ?, ?)"

        db.query(sql, [comment.getReviewDesc(), comment.getAccountID(), comment.getGameID()], callback)
    }

    getCommentByUserReviewID (reviewid, callback){
        var sql = "SELECT a.UserReviewID, b.Username, a.UserReviewDesc, a.UserReviewDate, a.UserReviewUpvote, c.GameName FROM gamereview.userreview AS a INNER JOIN account AS b ON b.AccountID = a.AccountID INNER JOIN gameinfo AS c ON c.GameID = a.GameID where a.UserReviewID = ? group by a.UserReviewID";

        return db.query (sql, [reviewid], callback)
    }

    getCommentByAccountID (accountid, callback){
        var sql = "SELECT a.UserReviewID, b.Username, a.UserReviewDesc, a.UserReviewDate, a.UserReviewUpvote, c.GameName FROM gamereview.userreview AS a INNER JOIN account AS b ON b.AccountID = a.AccountID INNER JOIN gameinfo AS c ON c.GameID = a.GameID where a.AccountID = ? group by a.UserReviewID";

        return db.query (sql, [accountid], callback)
    }

    getCommentByGameID (gameid, callback){
        var sql = "SELECT a.UserReviewID, b.Username, a.UserReviewDesc, a.UserReviewDate, a.UserReviewUpvote, c.GameName FROM gamereview.userreview AS a INNER JOIN account AS b ON b.AccountID = a.AccountID INNER JOIN gameinfo AS c ON c.GameID = a.GameID where a.GameID = ? group by a.UserReviewID";

        return db.query (sql, [gameid], callback)
    }

    updateCommentByReview (comment, callback){ //done
        var sql = "UPDATE userreview SET UserReviewDesc = ?, UserReviewDate = CURRENT_DATE() WHERE UserReviewID = ?";

        return db.query(sql, [comment.getReviewDesc(),comment.getReviewId()], callback)
    }

    upvoteComment (comment, callback){ //done
        var sql = "UPDATE userreview SET UserReviewUpvote = UserReviewUpvote + 1 WHERE UserReviewID = ?";

        return db.query(sql, [comment], callback)
    }

    downvoteComment(comment, callback){ //done
        
        var sql = "UPDATE userreview SET UserReviewUpvote = UserReviewUpvote - 1 WHERE UserReviewID = ?";
    
        return db.query(sql, [comment], callback)
        
    }

    deleteComment(commentID, callback){ //done
        var sql = "DELETE from userreview WHERE UserReviewID = ?";
        return db.query(sql, [commentID], callback);
    }

}

module.exports = commentsDB;