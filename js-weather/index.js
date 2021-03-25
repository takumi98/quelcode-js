// 今日の天気を表示する
const ShowTodaysWeather = (response) => {
  const obj = JSON.parse(response);
  const weather = obj.weather[0].description;
  const temp = obj.main.temp;
  const icon = obj.weather[0].icon;
  const humidity = obj.main.humidity;

  // 天気を表示する要素を取得
  const listsWeather = document.getElementById("weather");
  listsWeather.innerText = weather;
  const listsTemp = document.getElementById("temp");
  listsTemp.innerText = temp + "℃";
  const listsHumidity = document.getElementById("humidity");
  listsHumidity.innerText = humidity + "%";
  const weatherIcon = document.getElementById("icon");
  weatherIcon.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
};
// 天気のデータを取得
const getWeatherData = (cityData) => {
  const targetCityName = cityData;
  const appId = "b40c5bbc82d4fa2558581d2a6898068d";

  const requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?APPID=" +
    appId +
    "&lang=ja&units=metric&q=" +
    targetCityName +
    ",jp;";

  // Ajax通信用のオブジェクトを作成
  const xhr = new XMLHttpRequest();

  // 通信方式とURLを設定
  xhr.open("GET", requestUrl);

  // 通信を実行する
  xhr.send();

  // 通信ステータスが変わったら実行される関数
  xhr.onreadystatechange = () => {
    // 通信が完了
    if (xhr.readyState === 4) {
      ShowTodaysWeather(xhr.responseText);
    }
  };
};

// 都市名の取得
const getCity = () => {
  const city = document.getElementById("selectcity");
  const cityData = city.value;
  return cityData;
};

// 動作条件
const draw = () => {
  getWeatherData(getCity());
};

window.onload = draw;
selectcity.onchange = draw;
