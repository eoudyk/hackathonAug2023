// API Key:
// console.log(axios);

const baseURL = "https://api.openweathermap.org/data";
const apiKey = "c0804e951c76408d6b688ae4bd965f44";
// let query = "";
const unit = "units=metric";
// const url = `${baseURL}/2.5/weather?q=${query},ca&appid=${apiKey}&${unit}`;

// Dropdown Value
const dropdown = document.getElementById("citiesInput");

dropdown.addEventListener("change", function (e) {
  //   console.log(e.target.value);
  const query = e.target.value;
  const url = `${baseURL}/2.5/weather?q=${query},ca&appid=${apiKey}&${unit}`;

  console.log("url", url);

  // example
  axios
    .get(url)
    .then((response) => {
      console.log("data", response.data);

      // select the container element
      const weatherContainer = document.querySelector(".forecast");

      // city title
      const cityTitle = document.createElement("h1");
      cityTitle.classList.add("forecast__title");
      cityTitle.innerText = response.data.name;
      weatherContainer.appendChild(cityTitle);
      console.log(cityTitle);

      // p class:
      const pClass = document.createElement("p");
      pClass.classList.add("forecast__info");
      pClass.innerHTML = `<span class="profanity"></span>, it's <span class="temp"></span>°C!!`;
      weatherContainer.appendChild(pClass);

      // profanity:
      const printedProf = document.querySelector(".profanity");

      printedProf.innerText = randomProf;

      //  current forecast line:
      const temp = document.querySelector(".temp");
      temp.innerText = Math.trunc(response.data.main.temp);

      // Widget

      window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
      window.myWidgetParam.push({
        id: 11,
        cityid: response.data.id,
        appid: "c0804e951c76408d6b688ae4bd965f44",
        units: "metric",
        containerid: "openweathermap-widget-11",
      });
      (function () {
        var script = document.createElement("script");
        script.async = true;
        script.charset = "utf-8";
        script.src =
          "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(script, s);
      })();
    })
    .catch((error) => {
      console.error(error);
      alert("Broken :(");
    });
});

// Profanity list
const profList = ["Bitch", "Motherfucker", "Damn", "Shit", "Fuck", "Twathead"];
const randomProf = profList[Math.floor(Math.random() * profList.length)];

// Profanity

// // prof+ forecast
// const forecastInfo = document.createElement("p");
// forecastInfo.classList.add("forecast__info");
// forecastContainer.appendChild(forecastInfo);

// // Forecast card
// const forecastCard = document.createElement("div");
// forecastCard.classList.add("forecast-card");
// weatherContainer.appendChild(forecastCard);

// // Widget
// const widgetCard = document.createElement("h2");
// widgetCard.classList.add("forecast-card__info");
// forecastCard.appendChild(widgetCard);
