//your JS code here. If required.
let input =document.querySelector("#ip");
let btn=document.querySelector("#btn");
let output=document.querySelector("#output");

btn.addEventListener("click",()=>{
	output.innerHTML = "";
	let val=Number(input.value.trim());
	initial(val).then((res)=>{
		
		output.innerHTML+=`Result:${res}<br>`;
		return second(res);
	}).then((res)=>{
		output.innerHTML+=`Result:${res}<br>`;
		return Third(res);
	}).then((res)=>{
		output.innerHTML+=`Result:${res}<br>`;
		return Fourth(res);
	}).then((res)=>{
		output.innerHTML+=`Result:${res}<br>`;
		return Fifth(res);
	}).then((res)=>{
		output.innerHTML += `Final Result: ${res}<br>`;

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