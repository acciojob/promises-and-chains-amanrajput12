//your JS code here. If required.
let age = document.querySelector("#age");
let name = document.querySelector("#name");

let btnclick = document.querySelector("#btn");

function checkAge(age,name){
	return new Promise((resolve,reject)=>{
		 setTimeout(()=>{
			 if(age>=18){
            resolve(`Welcome,${name}. You can vote.`);
			 }
			 else{
				 reject(`oh sorry ${name}. You aren't old enough.`)
			 }
			 
},4000)
	})
}

btnclick.addEventListener("click",async(e)=>{
	e.preventDefault()
// alert(age.value)
	if(!(age.value) || !(name.value)){
		alert("Please enter valid details.")
		return
	}
	else{
		try{
		let message = await checkAge(age.value,name.value);
			alert(message);
		}
		catch(error){
			alert(error)
		}
		
	}
	
})