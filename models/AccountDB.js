"use strict";

var db = require('../db-connection');

class AccountDB{
    getLoginCredentials(id, callback){ //done
        var sql = "Select Password, AccountID from account where Username = ?";
        return db.query(sql, [id], callback);
    }

    authenticateByDB(id, password, callback){ //done
        var sql = "Select AccountID from account where Username = ? and Password = ?";
        
        return db.query(sql, [id, password], callback);
    }

    getAllUsers(callback){ //done
        var sql = "Select * from account";

        return db.query(sql, callback);
    }

    updatePassword(user, pass, callback){ //done
        var sql = "UPDATE account SET Password = ? WHERE Username = ?";

        return db.query(sql, [pass.getPassword(), user], callback);
    }

    addAccounts(add, callback){ //done
        var sql = "INSERT INTO account (Username, Password, Email, Role) VALUES (?, ?, ?, ?)";

        return db.query(sql, [add.getUserName(), add.getPassword(), add.getEmail(), add.getRole()], callback);
    }

    deleteAccount (user, callback){
        var sql = "DELETE from account WHERE Username = ?";

        return db.query(sql, [user], callback)
    }
}
module.exports = AccountDB;