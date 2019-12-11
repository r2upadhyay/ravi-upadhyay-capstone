import React, {Component} from 'react';
import './Weather.scss';
import {PROXY_URL, WEATHER_API_URL} from "../../constants/constants";
import axios from 'axios';
import ExpiredStorage from "expired-storage";
import ReactAnimatedWeather from 'react-animated-weather';

class Weather extends Component {
  state = {
  weather: {
      summary: null,
      temperature: null,
      humidity: null,
      icon: null,
      apparentTemperature: null,
      windSpeed: null
  }
}

    componentDidMount() {
      const expiredStorage = new ExpiredStorage();

      if (expiredStorage.isExpired("weather") || !expiredStorage.getItem("weather")) {
        const latitude = "43.653226";
        const longitude = "-79.383184";

        axios.get(`${PROXY_URL}/${WEATHER_API_URL}/${latitude},${longitude}`)
            .then(
              response => {
                const weatherStr = JSON.stringify(response.data.currently);
                expiredStorage.setItem('weather', weatherStr, 120);
                this.setState({weather: response.data.currently});
              }
            )
            .catch(
                error => {}
            )
      }
      else {
        this.setState({weather: JSON.parse(expiredStorage.getItem('weather'))}, () => {
          expiredStorage.clearExpired();
        });
      }
    }

    render() {
      let weatherBlock = "";

      if (this.state.weather.icon) {
        weatherBlock = (
          <div className="weather-container">
            <div className="weather-container__details">
              <h2 className="weather-container__details--header">Toronto Weather</h2>
              <ReactAnimatedWeather
                icon={this.state.weather.icon.toUpperCase()
                  .split('-')
                  .join('_')}
                color="#999999"
                size={100}
                animate={true}
              />
              <div>
                {this.state.weather.summary} / {Math.ceil((this.state.weather.temperature - 32) * (5/9))} <sup>o</sup>C
              </div>
              <div>
                <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
              </div>
            </div>
          </div>
        )
      }
        return weatherBlock;
    }
}

export default Weather;
