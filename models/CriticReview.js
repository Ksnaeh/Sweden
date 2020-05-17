"use strict";
class CriticReview {
    constructor(CriticID, CriticName, CriticRating, CriticDesc, CriticLink, CriticDate, GameId1) {
        this.criticid = CriticID;
        this.criticname = CriticName;
        this.criticrating = CriticRating;
        this.criticdesc = CriticDesc;
        this.criticlink = CriticLink;
        this.criticdate = CriticDate;
        this.gameid1 = GameId1;
    }
    getCriticID() {
        return this.criticid;
    }

    getCriticName() {
        return this.criticname;
    }

    getCriticRating(){
        return this.criticrating;
    }

    getCriticDesc() {
        return this.criticdesc;
    }
    getCriticLink() {
        return this.criticlink;
    }
    getCriticDate() {
        return this.criticdate;
    }
    getGameId1() {
        return this.gameid1;
    }


    setCriticID(CriticID) {
        this.criticid = CriticID;
    }
    setName(CriticName) {
        this.criticname = CriticName;
    }
    setRating(CriticRating) {
        this.criticrating = CriticRating;
    }
    setDescription(CriticDesc) {
        this.criticdesc = CriticDesc;
    }
    setLink(CriticLink) {
        this.criticlink = CriticLink;
    }
    setDatePosted(CriticDate) {
        this.criticdate = CriticDate;
    }
    setGame(GameId1) {
        this.gameid1 = GameId1;
    }

}
module.exports = CriticReview;
