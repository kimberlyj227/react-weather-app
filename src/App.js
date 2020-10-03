import React, { useState, useEffect } from "react";
import {Container, Row, Col} from "reactstrap";
import moment from "moment";
import SearchBar from "./components/SearchBar";
import DayDetails from "./components/DayDetails";
import DayCard from "./components/DayCard";
import API from "./utils/API";


function App() {
  // location
  // weather data (array of days) 
  // selected day
  // searchTerm
  const [weatherInfo, setWeatherInfo] = useState({
    location: "",
    days: [],
    selectedDay: null,
    searchTerm: ""
  });

  
  const {location, days, selectedDay, searchTerm} = weatherInfo;

  const getWeather = location => {
    API.getWeather(location)
      .then(({data}) => setWeatherInfo({
        location: data.city_name + ", " + data.state_code,
        days: data.data,
        selectedDay: null,
        searchTerm: ""
      }))
  }

  useEffect(() => {
    getWeather("Denver, CO")
  }, [])

  const handleInputChange = e => {
    setWeatherInfo({ ...weatherInfo, searchTerm: e.target.value })
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    getWeather(searchTerm);
  }


  return (
    <Container>
      <Row>
        <Col md={8} sm={6}>
          <h1>Weather for {location}</h1>
        </Col>
        <Col md={4} sm={6}>
          <SearchBar
            searchTerm={searchTerm}
            handleInputChange= {handleInputChange}
            handleFormSubmit= {handleFormSubmit}

          />
        </Col>
      </Row>

      <Row>
        {days.map(day => (
          <Col key={day.valid_date}>
            <DayCard
              description={day.weather.description}
              icon={day.weather.icon}
              high={day.high_temp}
              low={day.low_temp}
              current={day.temp}
              precip={day.pop}
              day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
              setSelected={() => setWeatherInfo({...weatherInfo, selectedDay: day})}
              isActive={day === selectedDay}
            />
          </Col>
        ))}

      </Row>

      <Row>
          <Col>
            {selectedDay ? (
              <DayDetails
              description={selectedDay.weather.description}
              icon={selectedDay.weather.icon}
              high={selectedDay.high_temp}
              low={selectedDay.low_temp}
              current={selectedDay.temp}
              precip={selectedDay.pop}
              day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("LL")}
              humidity={selectedDay.rh}
              appHigh={selectedDay.app_max_temp}
              appLow={selectedDay.app_min_temp}
              windDir={selectedDay.wind_cdir_full}
              windSpd={selectedDay.wind_spd}
            />
            ) : (<h3>Click on a day above to get day details!</h3>)}
          </Col>
      </Row>
    </Container>
  );
}

export default App;
