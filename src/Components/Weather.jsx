import "./Weather.css";
import search from "../assets/search.png";
import weather from "../assets/clear.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
export default function Weather() {
  const [Data, setData] = useState(false);
  const inputVal = useRef();

  const Search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      await axios.get(URL).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      setData(false);
      console.log("error in fetching data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Search(inputVal.current.value);
  };

  useEffect(() => {
    Search("Egypt");
  }, []);

  const Icon = Data?.weather
    ? `https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`
    : "";
  return (
    <div className="weather">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" ref={inputVal} />
        <img src={search} onClick={() => Search(inputVal.current.value)} />
      </form>
      {Data ? (
        <>
          <img src={Icon} className="weather-icon" />
          <p className="temp">{Math.floor(Data.main.temp)}°C</p>
          <p className="city">{Data.name}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity} alt="" />
              <div>
                <p>{Data.main.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="" />
              <div>
                <p>{Data.wind.speed} Km/h</p>
                <p>wind speed</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
