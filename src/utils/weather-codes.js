const codes = [
  {
    WeatherCode: 395,
    Condition: 'Moderate or heavy snow in area with thunder',
    DayIcon: 'wsymbol_0012_heavy_snow_showers',
    NightIcon: 'wsymbol_0028_heavy_snow_showers_night'
  },
  {
    WeatherCode: 392,
    Condition: 'Patchy light snow in area with thunder',
    DayIcon: 'wsymbol_0016_thundery_showers',
    NightIcon: 'wsymbol_0032_thundery_showers_night'
  },
  {
    WeatherCode: 389,
    Condition: 'Moderate or heavy rain in area with thunder',
    DayIcon: 'wsymbol_0024_thunderstorms',
    NightIcon: 'wsymbol_0040_thunderstorms_night'
  },
  {
    WeatherCode: 386,
    Condition: 'Patchy light rain in area with thunder',
    DayIcon: 'wsymbol_0016_thundery_showers',
    NightIcon: 'wsymbol_0032_thundery_showers_night'
  },
  {
    WeatherCode: 377,
    Condition: 'Moderate or heavy showers of ice pellets',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 374,
    Condition: 'Light showers of ice pellets',
    DayIcon: 'wsymbol_0013_sleet_showers',
    NightIcon: 'wsymbol_0029_sleet_showers_night'
  },
  {
    WeatherCode: 371,
    Condition: 'Moderate or heavy snow showers',
    DayIcon: 'wsymbol_0012_heavy_snow_showers',
    NightIcon: 'wsymbol_0028_heavy_snow_showers_night'
  },
  {
    WeatherCode: 368,
    Condition: 'Light snow showers',
    DayIcon: 'wsymbol_0011_light_snow_showers',
    NightIcon: 'wsymbol_0027_light_snow_showers_night'
  },
  {
    WeatherCode: 365,
    Condition: 'Moderate or heavy sleet showers',
    DayIcon: 'wsymbol_0013_sleet_showers',
    NightIcon: 'wsymbol_0029_sleet_showers_night'
  },
  {
    WeatherCode: 362,
    Condition: 'Light sleet showers',
    DayIcon: 'wsymbol_0013_sleet_showers',
    NightIcon: 'wsymbol_0029_sleet_showers_night'
  },
  {
    WeatherCode: 359,
    Condition: 'Torrential rain shower',
    DayIcon: 'wsymbol_0018_cloudy_with_heavy_rain',
    NightIcon: 'wsymbol_0034_cloudy_with_heavy_rain_night'
  },
  {
    WeatherCode: 356,
    Condition: 'Moderate or heavy rain shower',
    DayIcon: 'wsymbol_0010_heavy_rain_showers',
    NightIcon: 'wsymbol_0026_heavy_rain_showers_night'
  },
  {
    WeatherCode: 353,
    Condition: 'Light rain shower',
    DayIcon: 'wsymbol_0009_light_rain_showers',
    NightIcon: 'wsymbol_0025_light_rain_showers_night'
  },
  {
    WeatherCode: 350,
    Condition: 'Ice pellets',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 338,
    Condition: 'Heavy snow',
    DayIcon: 'wsymbol_0020_cloudy_with_heavy_snow',
    NightIcon: 'wsymbol_0036_cloudy_with_heavy_snow_night'
  },
  {
    WeatherCode: 335,
    Condition: 'Patchy heavy snow',
    DayIcon: 'wsymbol_0012_heavy_snow_showers',
    NightIcon: 'wsymbol_0028_heavy_snow_showers_night'
  },
  {
    WeatherCode: 332,
    Condition: 'Moderate snow',
    DayIcon: 'wsymbol_0020_cloudy_with_heavy_snow',
    NightIcon: 'wsymbol_0036_cloudy_with_heavy_snow_night'
  },
  {
    WeatherCode: 329,
    Condition: 'Patchy moderate snow',
    DayIcon: 'wsymbol_0020_cloudy_with_heavy_snow',
    NightIcon: 'wsymbol_0036_cloudy_with_heavy_snow_night'
  },
  {
    WeatherCode: 326,
    Condition: 'Light snow',
    DayIcon: 'wsymbol_0011_light_snow_showers',
    NightIcon: 'wsymbol_0027_light_snow_showers_night'
  },
  {
    WeatherCode: 323,
    Condition: 'Patchy light snow',
    DayIcon: 'wsymbol_0011_light_snow_showers',
    NightIcon: 'wsymbol_0027_light_snow_showers_night'
  },
  {
    WeatherCode: 320,
    Condition: 'Moderate or heavy sleet',
    DayIcon: 'wsymbol_0019_cloudy_with_light_snow',
    NightIcon: 'wsymbol_0035_cloudy_with_light_snow_night'
  },
  {
    WeatherCode: 317,
    Condition: 'Light sleet',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 314,
    Condition: 'Moderate or Heavy freezing rain',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 311,
    Condition: 'Light freezing rain',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 308,
    Condition: 'Heavy rain',
    DayIcon: 'wsymbol_0018_cloudy_with_heavy_rain',
    NightIcon: 'wsymbol_0034_cloudy_with_heavy_rain_night'
  },
  {
    WeatherCode: 305,
    Condition: 'Heavy rain at times',
    DayIcon: 'wsymbol_0010_heavy_rain_showers',
    NightIcon: 'wsymbol_0026_heavy_rain_showers_night'
  },
  {
    WeatherCode: 302,
    Condition: 'Moderate rain',
    DayIcon: 'wsymbol_0018_cloudy_with_heavy_rain',
    NightIcon: 'wsymbol_0034_cloudy_with_heavy_rain_night'
  },
  {
    WeatherCode: 299,
    Condition: 'Moderate rain at times',
    DayIcon: 'wsymbol_0010_heavy_rain_showers',
    NightIcon: 'wsymbol_0026_heavy_rain_showers_night'
  },
  {
    WeatherCode: 296,
    Condition: 'Light rain',
    DayIcon: 'wsymbol_0017_cloudy_with_light_rain',
    NightIcon: 'wsymbol_0025_light_rain_showers_night'
  },
  {
    WeatherCode: 293,
    Condition: 'Patchy light rain',
    DayIcon: 'wsymbol_0017_cloudy_with_light_rain',
    NightIcon: 'wsymbol_0033_cloudy_with_light_rain_night'
  },
  {
    WeatherCode: 284,
    Condition: 'Heavy freezing drizzle',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 281,
    Condition: 'Freezing drizzle',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 266,
    Condition: 'Light drizzle',
    DayIcon: 'wsymbol_0017_cloudy_with_light_rain',
    NightIcon: 'wsymbol_0033_cloudy_with_light_rain_night'
  },
  {
    WeatherCode: 263,
    Condition: 'Patchy light drizzle',
    DayIcon: 'wsymbol_0009_light_rain_showers',
    NightIcon: 'wsymbol_0025_light_rain_showers_night'
  },
  {
    WeatherCode: 260,
    Condition: 'Freezing fog',
    DayIcon: 'wsymbol_0007_fog',
    NightIcon: 'wsymbol_0007_fog'
  },
  {
    WeatherCode: 248,
    Condition: 'Fog',
    DayIcon: 'wsymbol_0007_fog',
    NightIcon: 'wsymbol_0007_fog'
  },
  {
    WeatherCode: 230,
    Condition: 'Blizzard',
    DayIcon: 'wsymbol_0020_cloudy_with_heavy_snow',
    NightIcon: 'wsymbol_0036_cloudy_with_heavy_snow_night'
  },
  {
    WeatherCode: 227,
    Condition: 'Blowing snow',
    DayIcon: 'wsymbol_0019_cloudy_with_light_snow',
    NightIcon: 'wsymbol_0035_cloudy_with_light_snow_night'
  },
  {
    WeatherCode: 200,
    Condition: 'Thundery outbreaks in nearby',
    DayIcon: 'wsymbol_0016_thundery_showers',
    NightIcon: 'wsymbol_0032_thundery_showers_night'
  },
  {
    WeatherCode: 185,
    Condition: 'Patchy freezing drizzle nearby',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 182,
    Condition: 'Patchy sleet nearby',
    DayIcon: 'wsymbol_0021_cloudy_with_sleet',
    NightIcon: 'wsymbol_0037_cloudy_with_sleet_night'
  },
  {
    WeatherCode: 179,
    Condition: 'Patchy snow nearby',
    DayIcon: 'wsymbol_0013_sleet_showers',
    NightIcon: 'wsymbol_0029_sleet_showers_night'
  },
  {
    WeatherCode: 176,
    Condition: 'Patchy rain nearby',
    DayIcon: 'wsymbol_0009_light_rain_showers',
    NightIcon: 'wsymbol_0025_light_rain_showers_night'
  },
  {
    WeatherCode: 143,
    Condition: 'Mist',
    DayIcon: 'wsymbol_0006_mist',
    NightIcon: 'wsymbol_0006_mist'
  },
  {
    WeatherCode: 122,
    Condition: 'Overcast',
    DayIcon: 'wsymbol_0004_black_low_cloud',
    NightIcon: 'wsymbol_0004_black_low_cloud'
  },
  {
    WeatherCode: 119,
    Condition: 'Cloudy',
    DayIcon: 'wsymbol_0003_white_cloud',
    NightIcon: 'wsymbol_0004_black_low_cloud'
  },
  {
    WeatherCode: 116,
    Condition: 'Partly Cloudy',
    DayIcon: 'wsymbol_0002_sunny_intervals',
    NightIcon: 'wsymbol_0008_clear_sky_night'
  },
  {
    WeatherCode: 113,
    Condition: 'Clear/Sunny',
    DayIcon: 'wsymbol_0001_sunny',
    NightIcon: 'wsymbol_0008_clear_sky_night'
  }
]

module.exports = codes
