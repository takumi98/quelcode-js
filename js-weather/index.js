function getWeatherData(cityData) {
  // 天気のデータを取得
  
  let targetCityName = cityData;
  let appId = "b40c5bbc82d4fa2558581d2a6898068d"
  
  const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + targetCityName + ",jp;"
  
  // Ajax通信用のオブジェクトを作成
  let xhr = new XMLHttpRequest();
  
  // 通信方式とURLを設定
  xhr.open("GET",requestUrl);
  
  // 通信を実行する
  xhr.send();
  
  // 通信ステータスが変わったら実行される関数
  xhr.onreadystatechange = function() {
    // 通信が完了
    if(xhr.readyState == 4){
      ShowTodaysWeather(xhr.responseText);
    }
    console.log(xht.responseText);
  }
  // 今日の天気を表示する
  function ShowTodaysWeather(response) {
    
    let obj = JSON.parse(response);

    let weathers = obj.weather[0].description;
    let temps = obj.main.temp;
    let icon = obj.weather[0].icon;
    let humidity = obj.main.humidity

    console.log(obj);

    // 天気を表示する要素を取得
    const listsWeather = document.getElementById("weather");
    listsWeather.innerText = weathers;
    const listsTemp = document.getElementById("temp");
    listsTemp.innerText = temps + "℃";
    const listsHumidity = document.getElementById("humidity");
    listsHumidity.innerText = humidity + "%";
    const weatherIcon = document.getElementById("icon");
    weatherIcon.src = "http://openweathermap.org/img/wn/"+ icon + "@2x.png"
    console.log(icon);
  }
}

window.onload = function() {
  getCity();
  getWeatherData(cityData);
}
selectcity.onchange = function() {
  getCity();
  getWeatherData(cityData);
}

function getCity() {
  const city = document.getElementById("selectcity");
  cityData = city.value
  return cityData.innerText;
}

function deleteWeather() {
  // const lists = document.querySelector("li");
  const lists = document.getElementById("cityweather");
  console.log(lists);
  while(lists.firstChild){
    lists.removeChild(lists.firstChild);
  }
}

