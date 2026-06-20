import { useEffect, useState } from "react";
import "./App.css";
import LiveTracker from "./components/LiveTrackerg";

const citiesData = [
  { id: 1, name: "თბილისი", temp: 25, condition: "მზიანი" },
  { id: 2, name: "ბათუმი", temp: 22, condition: "წვიმიანი" },
  { id: 3, name: "ქუთაისი", temp: 24, condition: "ღრუბლიანი" }
];

function App() {
  const [activeCity, setActiveCity] = useState(citiesData[0]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    console.log("ამინდის აპლიკაცია წარმატებით ჩაიტვირთა!");
  }, []);

  useEffect(() => {
    document.title = `ამინდი: ${activeCity.name}`;
  }, [activeCity]);

  function toggleLive() {
    setIsLive(!isLive);
  }

  return (
    <div className="container">
      <div className="weather-box">
        <h1>ამინდის აპლიკაცია</h1>

        <div className="city-buttons">
          {citiesData.map((city) => (
            <button
              key={city.id}
              className="city-btn"
              onClick={() => setActiveCity(city)}
            >
              {city.name}
            </button>
          ))}
        </div>

        <div className="city-info">
          <h2>{activeCity.name}</h2>
          <p>ტემპერატურა: {activeCity.temp}°C</p>
          <p>ამინდი: {activeCity.condition}</p>
        </div>

        <button className="live-btn" onClick={toggleLive}>
          {isLive ? "გათიშე Live რეჟიმი" : "ჩართე Live რეჟიმი"}
        </button>

        {isLive ? <LiveTracker /> : null}
      </div>
    </div>
  );
}

export default App;