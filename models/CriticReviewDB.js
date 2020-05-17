"use strict";

var db = require('../db-connection');
class CriticReviewDB{
    getAllCriticReview(callback){
        var sql = 'SELECT CriticID, CriticName, CriticRating, CriticDesc, CriticLink, CriticDate, b.GameName, date_format(GameRelease, "%d/%m/%Y") as CriticDate FROM gamereview.criticreview INNER JOIN gameinfo as b ON b.GameID = GameId1';
        db.query(sql, callback);
    }

    getCriticReviewbyGame (game, callback){
        var sql = "SELECT CriticID, CriticName, CriticRating, CriticDesc, CriticLink, CriticDate, b.GameName FROM criticreview INNER JOIN gameinfo as b ON b.GameID = GameId1 where GameId1 = ?";

        return db.query(sql, [game], callback);
    }

    addComment (critic, callback){
        var sql = "INSERT INTO criticreview (CriticName, CriticRating, CriticDesc, CriticLink, CriticDate, GameId1) VALUES (?, ?, ?, ?, ?, ?)"

        db.query(sql, [critic.getCriticName(), critic.getCriticRating(), critic.getCriticDesc(), critic.getCriticLink(), critic.getCriticDate(), critic.getGameId1()], callback)
    }

    getReviewWhere(CriticID, callback){
        var sql = "SELECT CriticID, CriticName, CriticRating, CriticDesc, CriticLink, CriticDate, b.GameName FROM criticreview INNER JOIN gameinfo as b ON b.GameID = GameId1 where CriticID = ?";

        return db.query(sql, [CriticID], callback);
    }

    updateReview (critic, callback){
        var sql = "UPDATE criticreview SET CriticName = ?, CriticRating = ?, CriticDesc = ?, CriticLink = ?, CriticDate = ?, GameId1 = ? WHERE CriticID = ?";

        return db.query(sql, [critic.getCriticName(), critic.getCriticRating(), critic.getCriticDesc(), critic.getCriticLink(), critic.getCriticDate(), critic.getGameId1(), critic.getCriticID()], callback)
    }

    deleteReview(criticID, callback){
        var sql = "DELETE from criticreview WHERE CriticID = ?";
        return db.query(sql, [criticID], callback);
    }

}

module.exports = CriticReviewDB;