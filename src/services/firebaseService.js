const firebase = require('firebase');

class FirebaseService {
    constructor() {
        this.firebase = firebase;
    }
    logout() {
        this.firebase.auth().signOut().then(() => console.log('Signed out'))
        .catch(err=> alert(err.message));
    }
}

export default new FirebaseService;