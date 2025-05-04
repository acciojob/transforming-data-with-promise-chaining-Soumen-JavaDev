let input = document.querySelector("#ip");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");

btn.addEventListener("click", () => {
	output.innerHTML = ""; // Clear previous output

	let val = Number(input.value.trim());

	initial(val)
		.then((res) => {
			output.innerHTML += `Result: ${res}<br>`;
			return second(res);
		})
		.then((res) => {
			output.innerHTML += `Result: ${res}<br>`;
			return third(res);
		})
		.then((res) => {
			output.innerHTML += `Result: ${res}<br>`;
			return fourth(res);
		})
		.then((res) => {
			output.innerHTML += `Result: ${res}<br>`;
			return fifth(res);
		})
		.then((res) => {
			output.innerHTML += `Final Result: ${res}<br>`;
		});
});

// Each function returns a Promise with delay using setTimeout

function initial(val) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(val);
		}, 2000); // 2 seconds
	});
}

function second(val) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(val * 2);
		}, 2000); // 2 seconds
	});
}

function third(val) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(val - 3);
		}, 1000); // 1 second
	});
}

function fourth(val) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(val / 2);
		}, 1000); // 1 second
	});
}

function fifth(val) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(val + 10);
		}, 1000); // 1 second
	});
}
