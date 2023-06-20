/**
* description  
**/

console.log('User_on')
class User {
    constructor(username, password) {
        this.username = username;  
        this.password = password;  
    }
    validatePassword() {
        console.log('work parent pass') 
        if (this.password.length > 6) {
           return true; 
        }
        return false;   
    }
}
