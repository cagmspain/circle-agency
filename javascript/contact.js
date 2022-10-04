const handleSubmit = async (e) => {
	e.preventDefault();
	const name1 = document.querySelector("#name");
	const email1 = document.querySelector("#email");
	const tel1 = document.querySelector("#tel");
	const textArea1 = document.querySelector("#textarea");
	const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
		method: "POST",

		body: JSON.stringify({
			name: name1.value,
			email: email1.value,
			tel: tel1.value,
			text: textArea1.value,
		}),
		headers: { "Content-Type": "application/json" },
	});
	console.log(res1);
	console.log(name1.value, email1.value, tel1.value, textArea1.value);
	const data = await res1.json();
	if (!res1.ok) {
		console.log("error");
	} else {
		console.log("todo ok");
	}
};

const button = document.querySelector("button");
//console.log(button);
//button.addEventListener("submit", handleSubmit);
