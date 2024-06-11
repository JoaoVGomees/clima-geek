import { useState } from "react";

import * as S from './styles';
import WeatherCard from "./Components/WeatherCard/weatherCard";

import Calor from '../../../assets/images/weather-imgs/imagem-calor.png';
import Chuva from '../../../assets/images/weather-imgs/imagem-chuva.png';
import Frio from '../../../assets/images/weather-imgs/imagem-frio.png';
import Nublado from '../../../assets/images/weather-imgs/imagem-nublado.png';
import Tempestade from '../../../assets/images/weather-imgs/imagem-tempestade.png';

export default function Home() {
  return (
    <S.Home source={ Tempestade } resizeMode="cover">
      <WeatherCard />
    </S.Home>
  );
}
