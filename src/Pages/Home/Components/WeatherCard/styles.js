import styled from "styled-components/native";

export const WeatherContainer = styled.View`
  height: 300px;
  width: 100%;
  padding: 70px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
  bottom: 0;
`;

export const ContainerWeatherSubInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const WeatherSubInfo = styled.Text`
  padding: 0 12px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ContainerWeatherDetails = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const WeatherTemp = styled.Text`
  color: #fff;
  font-size: 74px;
  font-weight: bold;
`;

export const WeatherIcon = styled.Image`
  width: 120px;
  height: 120px;
`;