"use strict"
const gameController = require ('../Controllers/gameController');

function routeGameInfo(app){
    app.route('/Game')
        .get(gameController.getAllGameInfo);

    app.route('/Game/Genre/:genre')
        .get(gameController.getGameFromGen);

    app.route('/Game/Pop/:popularity')
        .get(gameController.getGameFromAvril)
    
    app.route('/Game/search')
        .post(gameController.getGameFromName)
}

module.exports = {routeGameInfo};