import React from 'react';
import './WeatherService.css';

class WeatherService extends React.Component {
  state = {
    city: '',
    weather: null,
    error: null,
  };

  apiKey = 'ac7e9a2ca4737d694b2c8cffc21890dd'; // Replace with your OpenWeatherMap API key

  getWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.apiKey}&units=metric`);
      const data = await response.json();
      if (data.cod !== 200) {
        this.setState({ error: data.message, weather: null, city: '' });
      } else {
        this.setState({ weather: data, error: null, city: '' });
      }
    } catch (err) {
      this.setState({ error: 'Error fetching weather data', weather: null, city: '' });
    }
  };

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  render() {
    return (
      <div className="weather-container">
        <h1>Weather Information Service</h1>
        <input 
          type="text" 
          value={this.state.city} 
          onChange={this.handleCityChange} 
          placeholder="Enter city" 
        />
        <button onClick={this.getWeather}>Get Weather</button>
        {this.state.error && <p className="error">{this.state.error}</p>}
        {this.state.weather && (
          <div className="weather-card">
            <h2>{this.state.weather.name}</h2>
            <p>Temperature: {this.state.weather.main.temp}°C</p>
            <p>Weather: {this.state.weather.weather[0].description}</p>
            <p>Humidity: {this.state.weather.main.humidity}%</p>
            <p>Wind Speed: {this.state.weather.wind.speed} km/h</p>
          </div>
        )}
      </div>
    );
  }
}

export default WeatherService;
