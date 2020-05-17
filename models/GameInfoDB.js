"use strict"

var db = require('../db-connection');

class GameInfoDB{
    getAllGames(callback)
    {
        var sql = 'select *, date_format(GameRelease, "%d/%m/%Y") as GameRelease from gamereview.gameinfo';

        db.query(sql, callback);
    }

    getGamesFromGenre (GameGenre, callback)
    {
        var sql = "Select * from gamereview.gameinfo where GameGenre = ?";

        return db.query(sql, [GameGenre], callback);
    }

    getGamesFromAvail (GamePop, callback){
        var sql = "Select * from gamereview.gameinfo where GamePopularity = ?";

        return db.query(sql, [GamePop], callback);
    }

    getGamesfromName (GameName, callback){
        var sql = "Select * from gamereview.gameinfo where GameName = ?";

        return db.query(sql, [GameName], callback);
    }
}

module.exports = GameInfoDB;