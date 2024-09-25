let selectCity = document.querySelector("#select-menu");
selectCity.addEventListener("change", getTimezone);

function getTimezone(event) {
	timezone = selectCity.value;
	if (timezone === "current") {
		timezone = moment.tz.guess();
	}
	updateTime(timezone);
}

function updateTime(timezone) {
	let timezoneElement = timezone;
	let dateElement = document.querySelector("#date");
	let timeElement = document.querySelector("#time");

	let cityElement = document.querySelector("#city");
	let city = timezoneElement.split("/")[1];

	function capitalizeCity(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	dateElement.innerHTML = moment().tz(timezoneElement).format("dddd Do MMMM");
	timeElement.innerHTML = moment().tz(timezoneElement).format("HH:mm:ss");
	cityElement.innerHTML = capitalizeCity(city);
}

let timezone = "Asia/dubai";
updateTime(timezone);

let intervalId = setInterval(() => {
	updateTime(timezone);
}, 1000);

//CONSTANT CITIES

function showLondon() {
	let london = document.querySelector("#london");
	london.innerHTML = `
	<div class="cities">
				<div>
					<h2>London</h2>
					<div class="date">${moment().tz("Europe/london").format("dddd Do MMMM")}</div>
				</div>
				<div class="time">${moment().tz("Europe/london").format("HH:mm:ss")}</div>
			</div>`;
}

showLondon();
setInterval(showLondon, 1000);

function showChicago() {
	let chicago = document.querySelector("#chicago");
	chicago.innerHTML = `
	<div class="cities">
				<div>
					<h2>Chicago</h2>
					<div class="date">${moment().tz("America/chicago").format("dddd Do MMMM")}</div>
				</div>
				<div class="time">${moment().tz("America/chicago").format("HH:mm:ss")}</div>
			</div>`;
}

showChicago();
setInterval(showChicago, 1000);

function showSydney() {
	let sydney = document.querySelector("#sydney");
	sydney.innerHTML = `
	<div class="cities">
				<div>
					<h2>Sydney</h2>
					<div class="date">${moment()
						.tz("Australia/sydney")
						.format("dddd Do MMMM")}</div>
				</div>
				<div class="time">${moment().tz("Australia/sydney").format("HH:mm:ss")}</div>
			</div>`;
}

showSydney();
setInterval(showSydney, 1000);
