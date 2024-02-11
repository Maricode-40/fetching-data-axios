let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Sydney&key=46f53o0114a0et1fb464bc0d734f573e&unit=metric";

function showTemperature(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.temperature.current);
  h1.innerHTML = `It is ${temperature}° in Sydney`;
}

axios.get(apiUrl).then(showTemperature);
