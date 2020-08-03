function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log("User signed in");
    
        var user = firebase.auth().currentUser;
        if (!!user) {
            console.log(user.email);
            document.getElementById('main').style.display="flex";
            document.getElementById('sidebar').style.display="flex";
            document.getElementById("login-div").style.display="none";
        }
            
    }).catch(function (err) {
        if (err.code == "auth/wrong-password")
            alert("wrong password");
        else
            alert(err.message);
    });
}