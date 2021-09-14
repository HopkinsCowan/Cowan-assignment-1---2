let obj = [{username : "user1", password: "password"},

{username : "user2", password: "password1"},

{username : "user3", password: "password2"},

{username : "user4", password: "thispassword"} ];

let user = prompt("Input Username here:");
let pass = prompt("Input Password here:");


var userfound = obj.find(function(post, index) {
	
    if(post.username == user && post.password == pass)
		return true;
});

if(userfound){

    alert("Login Successful");

}

else{

    alert("Account not found.");
}