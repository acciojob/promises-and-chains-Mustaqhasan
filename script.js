function myFunc(event) {
	 event.preventDefault();
	let age=Number(document.getElementById("age").value);
	let name=document.getElementById("name").value;
	if(age=="" || name==""){
		return alert("Please enter valid details")
	}
	let checkAge=new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age>=18){
				resolve("Welcome, . You can vote.")
			}else{
				reject("Oh sorry . You aren't old enough.")
			}
		},4000)
	})

	checkAge.then((message)=>{
		alert(message)
	}).catch((err)=>{
		alert(err)
	})
}