"use strict"
class GameInfo {
    constructor(GameID, GameName, GamePublisher, GameGenre, GameDesc, GameRelease, GamePopularity, Trailer) {
        this.GameID = GameID;
        this.GameName = GameName;
        this.GamePub = GamePublisher;
        this.GameGenre = GameGenre;
        this.GameDesc = GameDesc;
        this.GameRelease = GameRelease;
        this.GamePopularity = GamePopularity;
        this.Trailer = Trailer;
    }
    //add the get methods here}

    getGameId() {
        return this.GameID;
    }
    getName() {
        return this.GameName;
    }
    getPub(){
        return this.GamePub;
    }
    getGenre() {
        return this.GameGenre;
    }
    getDesc() {
        return this.GameDesc;
    }
    getRelease(){
        return this.GameRelease;
    }
    getPopularity() {
        return this.GamePopularity;
    }
    getTrailer() {
        return this.Trailer;
    }



    setGameID(GameID){
        this.GameID = GameID;
    }
    setGameName(GameName){
        this.GameName = GameName;
    }
    setGamePub(GamePublisher){
        this.GamePub = GamePublisher;
    }
    setGameGenre(GameGenre){
        this.GameGenre = GameGenre
    }
    setGameDesc(GameDesc){
        this.GameDesc = GameDesc;
    }
    setGameRelease(GameRelease){
        this.GameRelease = GameRelease;
    }
    setGamePop(GamePopularity){
        this.GamePopularity = GamePopularity;
    }
    setTrailer(Trailer){
        this.Trailer = Trailer;
    }

} //end class
module.exports = GameInfo;
    