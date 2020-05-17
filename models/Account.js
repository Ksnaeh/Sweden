"use strict";
class Account {
    constructor(AccountID, Username, Password, Email, Role) {
        this.AccountID = AccountID;
        this.user_name = Username;
        this.password = Password;
        this.email = Email;
        this.role = Role;
    }
   
    getAccountID(){
        return this.AccountID;
    }

    getUserName(){
        return this.user_name;
    }

    getPassword(){
        return this.password;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }


    setAccountID(AccountID) {
        this.AccountID = AccountID;
    }
    setUsername(Username) {
        this.user_name = Username;
    }
    setPassword(Password) {
        this.password = Password;
    }
    setEmail(Email) {
        this.email = Email;
    }
    setRole(Role) {
        this.role = Role;
    }
}
module.exports = Account;