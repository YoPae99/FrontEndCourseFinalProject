function validate(){
	var username = document.getElementsByName("username")[0].value;
	var email = document.getElementsByName("email")[0].value;
	var password = document.getElementsByName("password")[0].value;
	var confirm_password = document.getElementsByName("confirm_password")[0].value;

	if(username == ""){
		var error = document.getElementById("error");
		error.innerHTML = "Please enter a username!";
	}
	else if(email == ""){
		var error = document.getElementById("error");
		error.innerHTML = "Please enter an email!";
	}
	else if(password == ""){
		var error = document.getElementById("error");
		error.innerHTML = "Please enter a password!";
	}
	else if(confirm_password == ""){
		var error = document.getElementById("error");
		error.innerHTML = "Please confirm your password!";
	}
	else if(password != confirm_password){
		var error = document.getElementById("error");
		error.innerHTML = "Passwords do not match!";
	}
	else{
		var error = document.getElementById("error");
		error.innerHTML = "Account successfully created";
        error.style.color = "green";
		window.location.href="login.html";
    }
}