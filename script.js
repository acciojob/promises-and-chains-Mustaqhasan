//your JS code here. If required.

function myFunc() {
	let age=document.getElementById("age").value;
	let name=document.getElementById("name").value;
	if(age=="" || name==""){
	 	return alert("Please enter valid details.")
	 }else if(age>=18){
		return alert("Welcome, You can vote")
	 }else{
		return alert("Oh sorry, You aren't old enough")
	 }
}

