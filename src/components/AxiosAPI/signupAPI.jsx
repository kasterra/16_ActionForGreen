
import axios from 'axios';

/*
const json = JSON.stringify({
    
    email: "testkkk@abc.com",
    password: "test@1234",
    returnSecureToken: true
});
*/

function signupAPI(props) {
let email = props.email;
let password = props.password;

let json = JSON.stringify({
    "email": email,
    "password": password,
    "returnSecureToken": true,
})

console.log(json);

axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAr7uawUtRkM5YzG7w1W3nI96SYluf0gXQ', 
    json,{headers: {"Content-Type": 'application/json',},})
.then(function(response) {
    console.log(response);
    console.log("성공");
    return false;
})
.catch(function(error) {
    console.log(error);
    return true;
})



return false;
}

export default signupAPI;
