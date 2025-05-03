//your JS code here. If required.
let input =document.querySelector("#ip");
let btn=document.querySelector("#btn");
let output=document.querySelector("#output");

btn.addEventListener("click",()=>{
	let val=Number(input.value.trim());
	initial(val).then((msg)=>{
		output.innerHTML=msg;
		second(msg).then((msg)=>{
			output.innerHTML=msg;
			Third(msg).then((msg)=>{
			output.innerHTML=msg;
				Fourth(msg).then((msg)=>{
			output.innerHTML=msg;
					Fifth(msg).then((msg)=>{
			output.innerHTML=msg;
		})
		})
		})
		})
	})
		
	
	


})
function initial(val){
	return new Promise ((resolve,reject)=>{
        
		setTimeout(()=>{
			resolve(val);
		},2000)
	})
}
function second(params) {
	return new Promise ((resolve,reject)=>{

		setTimeout(()=>{
			resolve(params*2);
		},2000)
	})
}
function Third (params) {
	return new Promise ((resolve,reject)=>{

		setTimeout(()=>{
			resolve(params-3);
		},1000)
	})
}
function Fourth (params) {
	return new Promise ((resolve,reject)=>{

		setTimeout(()=>{
			resolve(params/2);
		},1000)
	})
}
function Fifth (params) {
	return new Promise ((resolve,reject)=>{

		setTimeout(()=>{
			resolve(params+10);
		},1000)
	})
}