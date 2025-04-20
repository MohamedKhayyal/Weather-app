import "./Weather.css";
import search from "../assets/search.png";
import weather from "../assets/clear.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
export default function Weather() {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search} alt="" />
      </div>
      <img src={weather} className="weather-icon" />
      <p className="temp">16°C</p>
      <p className="city">London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="" />
          <div>
            <p>90 %</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={wind} alt="" />
          <div>
            <p>3.6 Km/h</p>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
