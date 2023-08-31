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

  const profList = [
    "Bitch",
    "Motherfucker",
    "Shit",
    "Fuck knuckle",
    "Twathead",
    "Wanker",
    "Cheese Eating Surrender Monkeys",
    "Arse-licker",
    "Bugger",
    "Fuck me dead",
  ];
  const randomProf = profList[Math.floor(Math.random() * profList.length)];
  console.log("url", url);

  axios
    .get(url)
    .then((response) => {
      console.log("data", response.data);

      // select the container element
      const weatherContainer = document.querySelector(".forecast");
      weatherContainer.innerHTML = "";

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

      //   other weather info:

      const furtherDescription = document.createElement("p");
      furtherDescription.classList.add("forecast__info");
      furtherDescription.innerText = `Expect ${response.data.weather[0].description}`;
      weatherContainer.appendChild(furtherDescription);

      let timestamp = response.data.dt;

      var date = new Date(timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime =
        hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

      const lastUpdated = document.createElement("p");
      lastUpdated.classList.add("forecast__update-time");
      lastUpdated.innerText = `Last Updated at ${formattedTime}`;
      weatherContainer.appendChild(lastUpdated);
    })
    .catch((error) => {
      console.error(error);
      alert("Broken :(");
    });
});

// Profanity list
// const profList = ["Bitch", "Motherfucker", "Damn", "Shit", "Fuck", "Twathead"];
// const randomProf = profList[Math.floor(Math.random() * profList.length)];
