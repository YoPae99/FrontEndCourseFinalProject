function validate(){
	var email = document.getElementsByName("email")[0].value;

	if(email == ""){
		var error = document.getElementById("error");
		error.innerHTML = "Please enter an email!";
	}
	else{
		var error = document.getElementById("error");
		error.innerHTML = "Password reset link has sent to your email!";
        error.style.color = "green";
		window.location = "login.html";
	}
}
