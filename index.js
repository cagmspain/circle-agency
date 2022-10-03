const getData = async () => {
	const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
	//console.log(promise);
	const data = await promise.json();
	console.log(data[0].title);
	return data;
};
//console.log(getData(3));

const projectsTitles = async () => {
	const data = await getData();
	console.log(data);
	const title1 = data[0].title;
	const title2 = data[1].title;
	const title3 = data[2].title;
	const body1text = data[0].body;
	const body2text = data[1].body;
	const body3text = data[2].body;

	console.log(title1, title2, title3);
	console.log(body1text, ".....", body2text, "....3", body3text);

	const titleDiv1 = document.querySelector("#title1");
	const titleDiv2 = document.querySelector("#title2");
	const titleDiv3 = document.querySelector("#title3");
	const body1 = document.querySelector("#body1");
	const body2 = document.querySelector("#body2");
	const body3 = document.querySelector("#body3");
	console.log(body1, body2);
	titleDiv1.innerHTML = `${title1}`;
	titleDiv2.innerHTML = `${title2}`;
	titleDiv3.innerHTML = `${title3}`;
	body1.innerHTML = `${body1text}`;
	body2.innerHTML = `${body2text}`;
	body3.innerHTML = `${body3text}`;
};
projectsTitles();
