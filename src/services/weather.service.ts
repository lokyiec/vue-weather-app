import { Temperature } from '../utils/temperature-converter'
import type { City } from '../models/city.model'
import type { ForecastResponse } from '../models/weather.dto'
import type { Weather } from '../models/weather.model'

class WeatherService {
  private apiKey: string
  private baseUrl: string

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/'
  }

  public async getWeather(cityId: string): Promise<ForecastResponse> {
    const url = `${this.baseUrl}forecast?id=${cityId}&appid=${this.apiKey}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  public convertToCurrentWeather(data: ForecastResponse, city: City): Weather {
    if (
      !data.list ||
      !data.list[0] ||
      !data.list[0].main ||
      !data.list[0].weather ||
      !data.list[0].weather[0]
    ) {
      throw new Error('Invalid data structure')
    }
  
    return {
      city: {
        id: city.id,
        name: city.name,
      },
      temperature: {
        value: data.list[0].main.temp,
        description: data.list[0].weather[0].description,
        icon: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`,
        unit: Temperature.Kelvin,
      },
    }
  }

  public async getWeatherForCities(cities: City[]): Promise<Weather[]> {
    const promises = cities.map(async (city) => {
      const data = await this.getWeather(city.id)
      return this.convertToCurrentWeather(data, city)
    })
    return Promise.all(promises)
  }
}

export default new WeatherService()
