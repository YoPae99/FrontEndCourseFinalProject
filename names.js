function validate(){
	var username = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;

	if(username == "202100188@my.apiu.edu" && password == "Asd,car22"){
		window.location.href = "home.html";
	}
	else{
		var error = document.getElementById("error");
		error.innerHTML = "Invalid username or password!";
	}
}