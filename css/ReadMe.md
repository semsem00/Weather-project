# Weather App Project 

## Overview
This project helps you to know the weather condition for today and the next two days in the City that you want to Know the weather there .

## Technological Used 
- Languages ​​used in the project: html5 , css3 , javaScript , bootstrap4.6 .

## Characteristics of the project:
- create API on https://www.weatherapi.com/

## How I do project:
- first you make a  async fuction to get weather by Api :
-- featch data from www.weatherapi.com using keycode 
-- subscribe at www.weatherapi.com to get key and url
-- turn data to json  .
-- add var locName as a intial location and give him value like " cairo".
- in search function you get the location from user and  you replace it with the place location in api.

- There are 3 function to weather for each day: TodayWeather , NextDayWeather , NextNextDay .

-- in  function TodayWeather you get get data from api:
1- temprature 
2- weather image
3- date
4- humidty
5- wind
6- compass
7-  describing Weather
 and set in html by innerHTMl .
 
 -- in  function NextDayWeather and NextNextDay get 
 1- temprature big
 2- temprature small
 3- date 
 4- weather image
 5- describing Weather
 and set in html by innerHTMl
