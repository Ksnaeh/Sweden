"use strict";

const User = require('../models/Account');
const accountDB = require('../models/AccountDB');

var userDB = new accountDB();

//Function to authenticate by comparing input password
//and password from the database

function prepareMessage(msg){
    var obj = {"message": msg};

    return obj;
}

function authenticate(request, respond){ //done
    var input_username = request.body.username;
    var input_password = request.body.password;
    var msg = "";

    userDB.getLoginCredentials(input_username, function(error, result){
        if (error){
            respond.json(error);
        } else {
            if (result.length > 0){
                if (input_password == result[0].Password) {
                    msg = "Success";
                    console.log(msg);
                } else {
                    msg = "Fail";
                    console.log(msg);
                }
            } else {
                msg = "User not found!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

function authenticateByDB(request, respond){ //done
    var msg="";

    userDB.authenticateByDB(request.body.username, request.body.password, function(error, result){
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
    
function updatePassword (request, respond){ //done
    var user_name = request.params.Username;
    var comment = new User(null, null, request.body.Password);
    
    userDB.updatePassword(user_name, comment, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
 }


function addAcc (request, respond){ //done
    var comment = new User(null, request.body.username, request.body.password, request.body.email, request.body.role);
    var msg = "";
    userDB.addAccounts(comment, function(error, result){
        if (error){
            msg = "0";
            console.log(msg);
            respond.json(error);
        }
        else{
            msg = "1";
            console.log(msg);
            respond.json(result);
        }
    });
}

function getAllUsers (request, respond){ //done
    userDB.getAllUsers(function( error, result){
        if (error){
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

function deleteUser (request, respond){
    var usernam = request.params.Username;
    userDB.deleteAccount(usernam, function(error, result){
        if (error){
            respond.json(error);
        } else {
            respond.json(result);
        }
    })
}

module.exports = {authenticate, authenticateByDB, updatePassword, addAcc, getAllUsers, deleteUser};