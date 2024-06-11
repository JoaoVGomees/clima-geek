import React from 'react';
import * as S from './styles';

import SolIcon from '../../../../../assets/images/weather-icons/sol-icon.png'

const WeatherCard = ({ temperature, description, city }) => {
  return (
    <S.WeatherContainer >
      <S.ContainerWeatherSubInfo>
        <S.WeatherSubInfo>Domingo</S.WeatherSubInfo>
        <S.WeatherSubInfo>SP - São Paulo</S.WeatherSubInfo>
      </S.ContainerWeatherSubInfo>

      <S.ContainerWeatherDetails>
        <S.WeatherTemp>35º</S.WeatherTemp>
        <S.WeatherIcon source={SolIcon}/>
      </S.ContainerWeatherDetails>
    </S.WeatherContainer>
  );
}

export default WeatherCard;