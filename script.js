var appId = "20e409c032b67b29429c689f2b013d9f";
var btnEl = document.querySelector("#btn");
var searchEl = document.querySelector("#search");

    btnEl.addEventListener("click", getWeather)


function getWeather(){
     var cityName = searchEl.value
     var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=20e409c032b67b29429c689f2b013d9f&units=imperial";
     getForecast(cityName)
     fetch(url)
     .then((res) => res.json()).then((data) => {
         displayResults(data)
         console.log(data)})
 }

 function displayResults(data){
     var card = document.createElement("h2")
     var cityNameEl = document.createElement("h2")
     var temperatureEl = document.createElement("h2")
     var humidityEl = document.createElement("h2")
     var windEl = document.createElement("h2")
     cityNameEl.textContent = data.name
     temperatureEl.textContent = data.main.temp + " Degrees"
     humidityEl.textContent = data.main.humidity + "% Humidity"
     windEl.textContent = data.wind.speed + "mph Winds"

     card.append(cityNameEl, temperatureEl,humidityEl, windEl)

     document.querySelector("#todayWeather").append(card)
 }

 function getForecast(cityName) {
     var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=20e409c032b67b29429c689f2b013d9f&units=imperial"

     fetch(url)
     .then((res) => res.json()).then((data) => {
         console.log(data)
     })
 }

 function getForecast(cityName) {
    var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=20e409c032b67b29429c689f2b013d9f&units=imperial"

    $.ajax({
        url: fiveDayQueryURL,
        type: 'GET',
    }).then(function (response) {
        $('#forecast')
            .html('<h4 class="">5 Day Forecast:</h4>')
            console.log(response);


        for (var i=0; i < response.list.length; i++) {
            var hour = response.list[i];

            if(hour.dt_txt.indexOf('00:00:00') != -1) {
                var date = new Date(hour.dt_txt).toLocaleDateString();
                hour.main.temp;

                hour.main.humidity;
                var DIV = $('<div>');
                var image = $('<img>');
                image.attr(
                    'src',
                    `https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`
                );
                DIV.addClass('divClasses justify-content-left');
                DIV.append(`<h3>${date}</h3>`);
                DIV.append(image);
                DIV.append(
                    `<p>Temperature <br> ${
                        hour.main.temp + 'º F'
                    } </p><p>Humidity <br> ${hour.main.humidity + '%'}</p>`
                );
                $('#forecast').append(DIV);
            }
        }
   });
}









