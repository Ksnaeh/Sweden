"use strict";

const FavouritesDB = require('../models/FavouritesDB');
const Favourites = require('../models/Favourites');

var favDB = new FavouritesDB();

function getAllFav (request, respond){ //done
    favDB.getFavouritesList(function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function getAllFavByAcc (request, respond){ //done
    var id = request.params.accountid
    favDB.getFavsBasedOnAcc(id, function(error, result){
        if (error){
            respond.json(error);
        } 
        else {
            respond.json(result);
        }
    });
}

function addFavs (request, respond){ //done
    var favorites = new Favourites(null, request.body.AccountID, request.body.GameID);
    var msg = "";
    favDB.addFavourites(favorites, function(error, result){
        if (error){
            respond.json(error);
            msg = "failed to add";
            console.log(msg);
        }
        else{
            respond.json(result);
            msg = "can add";
            console.log(msg);
        }
    });
}

function updateFavourites (request, respond){ //done
    var now = new Date();
    var favourites = new Favourites(parseInt(request.params.FavouriteID), request.body.AccountID, request.body.GameID, now.toString());

    favDB.updateFavourites(favourites, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteFavourites (request, respond){ //done
    var favID = request.params.FavouriteID;
    favDB.deleteFavs (favID, function(error, result){
        if (error){
            respond.json (error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllFav, getAllFavByAcc, addFavs, updateFavourites, deleteFavourites};