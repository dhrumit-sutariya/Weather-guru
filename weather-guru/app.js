const container = document.querySelector(".container"),
  searchBtn = document.getElementById("search-btn"),
  searchField = document.getElementById("search"),
  apiKey = "387e3e7ba9eca3c78dba15ebc983075a",
  url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
  weatherIcon = document.querySelector('.clouds'),
  output = document.querySelector(".output");


searchBtn.addEventListener("click", () => {
  const cityName = searchField.value;
  if (cityName === '') {
    output.innerHTML = `<h3 class='empty'>Please Enter a City name</h3>` //return when search field is empty
  } else {
    fetch(url + cityName + `&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        output.innerHTML = `<main>
      <span class="city">${data.name}</span>
      <span class="weather-icon"><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"></span>
      <small class="description">${data.weather[0].main}</small>
      <span class="temp">${Math.round(data.main.temp)}°C</span>
  </main>
  <section>
      <div class="details">
          <span>Wind Speed</span>
          <span>${data.wind.speed} km/h</i></span>
      </div>
      <div class="details">
          <span>Pressure</span>
          <span>${data.main.pressure} atm</span>
      </div>
      <div class="details">
          <span>Humidity</span>
          <span>${data.main.humidity} %</span>
      </div>
  </section>`;
        // console.log(console.log(data));
      })
      .catch(() => {
        output.innerHTML = `<h3 class="msg">City not found</h3>`;
      });

  }

});