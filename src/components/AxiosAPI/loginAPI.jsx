import axios from 'axios';


function loginAPI(props) {
    let email = props.email;
    let password = props.password;
    let json = {
        "email": email,
        "password": password,
        "returnSecureToken": true,
    };

    console.log(json);

    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAr7uawUtRkM5YzG7w1W3nI96SYluf0gXQ',
        json, { headers: { "Content-Type": "application/json", }, })

        .then(function (response) {
            console.log(response);
            console.log("로그인 성공");
            return false;
        })
        .catch(function (error) {
            console.log(error);
            return true;
        })

    return false;
}

export default loginAPI;