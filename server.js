"use strict";

const express = require("express");
const routeMovies = require('../Game_Review_Project/routes/routeGameInfo');
const routeComments = require('../Game_Review_Project/routes/routeComments');
const routeCriticreview = require('../Game_Review_Project/routes/routeCriticReview');
const routeUsers = require('../Game_Review_Project/routes/routeUsers');
const routeFavourites = require('../Game_Review_Project/routes/routeFavourites');
const bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeMovies.routeGameInfo(app);
routeComments.routeComments(app);
routeCriticreview.routeCriticReview(app);
routeUsers.routeUsers(app);
routeFavourites.routeFavourites(app);

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
