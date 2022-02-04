import axios from 'axios';

axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAr7uawUtRkM5YzG7w1W3nI96SYluf0gXQ', {
    "email": this.props.email,
    "password": this.props.password,
    "returnSecureToken": true,
})
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.log(error);
})