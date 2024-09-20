let selectCity = document.querySelector("#select-menu");
selectCity.addEventListener("change", getTimezone);

function getTimezone(event) {
	timezone = selectCity.value;
	updateTime(timezone);
}

function updateTime(timezone) {
	let dateElement = document.querySelector("#date");
	let timeElement = document.querySelector("#time");

	let cityElement = document.querySelector("#city");
	let city = timezone.split("/")[1];

	function capitalizeCity(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	dateElement.innerHTML = moment().tz(timezone).format("dddd Do MMMM");
	timeElement.innerHTML = moment().tz(timezone).format("HH:mm:ss");
	cityElement.innerHTML = capitalizeCity(city);
}

let timezone = "Europe/london";
updateTime(timezone);

let intervalId = setInterval(() => {
	updateTime(timezone);
}, 1000);

//CONSTANT CITIES

let cityHtml = "";

const cities = ["Europe/london", "Europe/paris", "US/hawaii"];

cities.forEach(function showTimezone(city) {
	cityHtml =
		cityHtml +
		`
	<div class="cities">
				<div>
					<h2 id="city">London</h2>
					<div class="date" id="date">${city}</div>
				</div>
				<div class="time" id="time">12:00:00<span class="am-pm">AM</span></div>
			</div>`;
});

let allCities = document.querySelector("#all-cities");
allCities.innerHTML = cityHtml;
