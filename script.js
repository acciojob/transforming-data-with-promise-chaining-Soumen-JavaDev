//your JS code here. If required.
let input =document.querySelector("#ip");
let btn=document.querySelector("#btn");
let output=document.querySelector("#output");

btn.addEventListener("click",()=>{
	let val=Number(input.value.trim());
	initial(val).then((res)=>{
		
		output.innerHTML="Result:${res}";
		return second(res);
	}).then((res)=>{
		output.innerHTML="Result:${res}";
		return Third(res);
	}).then((res)=>{
		output.innerHTML="Result:${res}";
		return Fourth(res);
	}).then((res)=>{
		output.innerHTML="Result:${res}";
		return Fifth(res);
	}).then((res)=>{
		output.innerHTML="Result:${res}";
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