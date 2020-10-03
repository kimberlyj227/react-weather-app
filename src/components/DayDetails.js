import React from "react";
import {Card, CardBody} from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`
  text-align: center;
  margin: 15px 0;
  border: 2px solid teal;

`

const DayDetails = ({appHigh, appLow, day, description, high, humidity, icon, low, precip,  windDir, windSpd, current}) => {
  return (
    <DetailsWrapper>
        <CardBody>
            <h2>Weather Details for {day}</h2>
            <h2>{current.toFixed(1)}°</h2>
            <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} 
            alt={description}
              />
              <p><strong>High:</strong> {high.toFixed(1)}° (Feels like: {appHigh.toFixed(1)}°)</p>
              <p><strong>Low:</strong> {low.toFixed(1)}° (Feels like: {appLow.toFixed(1)}°)</p>
              <p><strong>Precip:</strong> {precip}% || <strong>Humidity:</strong> {humidity}%</p>
              <p><strong>Wind Speed:</strong> {windSpd} || <strong>Wind Direction:</strong> {windDir}</p>
        </CardBody>
      </DetailsWrapper>
  )
}

export default DayDetails;