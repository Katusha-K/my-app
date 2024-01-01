import React from "react";
import axios from "axios";

export default function Greeting(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}C`
    );
  }

  let apiKey = "ae7531893d315790aca3946acd1731fc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hope to be Happy!</h2>;
}
