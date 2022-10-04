const handleSubmit = async (e) => {
	e.preventDefault();
	const name1 = document.querySelector("#name");
	const email1 = document.querySelector("#email");
	const tel1 = document.querySelector("#tel");
	const textArea1 = document.querySelector("#textarea");
	const respuesta = document.querySelector(".succes");
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
		respuesta.innerHTML = `Something went wrong ${name1.value}, try again later!`;
	} else {
		console.log("todo ok");
		respuesta.innerHTML = `Thank you for your message ${name1.value}, we will contact you soon!`;
	}
};

const formTag = document.querySelector("form");
console.log(formTag);
formTag.addEventListener("submit", handleSubmit);
