import User from "../../models/User";

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

const api_key = 'AIzaSyCA8nxrv7yFDZ2uy5B4DUgHZft-aKHkuTE';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                email: email, //key value pairs of data you want to send to server
                password: password,
                returnSecureToken: true
            }) 
        }); // with await it will wait for the server to respond
  
        const data = await response.json(); // json to javascript   
        console.log(data);

        if (!response.ok) {
            //There was a problem..
        } else {
            const newuser = new User(data.localId, '', '', '', email)
            dispatch({type: SIGN_UP, payload: newuser})
            
        }
    };
 };

 export const signin = (email, password) => {
    return async dispatch => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                email: email, //key value pairs of data you want to send to server
                password: password,
                returnSecureToken: true
            }) 
        }); // with await it will wait for the server to respond
  
        const data = await response.json(); // json to javascript   
        console.log(data);

        if (!response.ok) {
            //There was a problem..
        } else {
            const user = new User(data.localId, '', '', '', email)
            dispatch({type: SIGN_IN, payload: user})
        }
    };
 };
 
