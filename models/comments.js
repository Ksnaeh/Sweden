"use strict";
class Comment {
    constructor(UserReviewID, UserReviewDesc, UserReviewDate, UserReviewUpvote, AccountID, GameID) {
        this.ReviewID = UserReviewID;
        this.ReviewDesc = UserReviewDesc;
        this.ReviewDate = UserReviewDate;
        this.ReviewUpvote = UserReviewUpvote;
        this.AccountID = AccountID;
        this.GameID = GameID;
    }
    getReviewId() {
        return this.ReviewID;
    }

    getReviewDesc() {
        return this.ReviewDesc;
    }
    getReviewDate() {
        return this.ReviewDate;
    }
    getReviewUpvote() {
        return this.ReviewUpvote;
    }
    getAccountID() {
        return this.AccountID;
    }
    getGameID() {
        return this.GameID;
    }


    setReviewID(UserReviewID) {
        this.ReviewID = UserReviewID;
    }
    setDesc(UserReviewDesc) {
        this.ReviewDesc = UserReviewDesc;
    }
    setDate(UserReviewDate) {
        this.ReviewDate = UserReviewDate;
    }
    setUpvote(UserReviewUpvote) {
        this.ReviewUpvote = UserReviewUpvote;
    }
    setAccountID(AccountID) {
        this.AccountID = AccountID;
    }
    setGameID(GameID) {
        this.GameID = GameID;
    }

}
module.exports = Comment;
