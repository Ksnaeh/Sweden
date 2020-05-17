"use strict";
const GameInfoDB = require('../models/GameInfoDB');

var GameInfo = new GameInfoDB();

function prepareMessage(msg){
    var obj = {"message": msg};

    return obj;
}

function getAllGameInfo (request, respond){
    //call the gtAllMovies() function in the MoviesDB class.
    GameInfo.getAllGames(function( error, result){
        if (error){
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

function getGameFromGen (request, respond){
    var idm = request.params.genre;
    GameInfo.getGamesFromGenre (idm, function(error, result){
        if (error){
            respond.json(error);
        } else{
            respond.json(result);
        }
    });
}

function getGameFromAvril (request, respond){
    var pop = request.params.popularity;
    GameInfo.getGamesFromAvail (pop, function(error, result){
        if (error){
            respond.json(error);
        } else{
            respond.json(result);
        }
    });
}

function getGameFromName (request, respond){
    var p = request.body.GameName;
    var msg = "";
    GameInfo.getGamesfromName (p, function(error, result){
        if (error){
            respond.json(error);
        } else{
            if (result.length > 0){
                msg = "1";
                console.log(msg);
               
            } else{
                msg = "0";
                console.log(msg);
            }
            respond.json(prepareMessage(msg));
        }
    });
}


module.exports = {getAllGameInfo, getGameFromGen, getGameFromAvril, getGameFromName};