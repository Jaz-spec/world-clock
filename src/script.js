function updateTime(timezone) {
	let date = document.querySelector("#date");
	let time = document.querySelector("#time");

	date.innerHTML = moment().tz(timezone).format("dddd Do MMMM");
	time.innerHTML = moment().tz(timezone).format("HH:mm:ss");
}

updateTime("Europe/london");
let intervalId = setInterval(() => {
	updateTime("Europe/london");
}, 1000);
