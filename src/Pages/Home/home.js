import { useState } from "react";
import { Text, View, StatusBar, ImageBackground, TextInput, Button } from 'react-native';

import { styles } from "./styles";
import WeatherCard from "./Components/WeatherCard/weatherCard";

import Calor from '../../../assets/images/weather-imgs/imagem-calor.png';
import Chuva from '../../../assets/images/weather-imgs/imagem-chuva.png';
import Frio from '../../../assets/images/weather-imgs/imagem-frio.png';
import Nublado from '../../../assets/images/weather-imgs/imagem-nublado.png';
import Tempestade from '../../../assets/images/weather-imgs/imagem-tempestade.png';

export default function Home() {
  const [stateTemperatura, setStateTemperatura] = useState();
  const [descricao, setDescricao] = useState("desc");
  const [cidade, setCidade] = useState("Cidade");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=9d7dda8c0f3471b54505c0a37583066e`;
  let Background;

  const callApi = () => {

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dadoTemperatura) => {
        setStateTemperatura(dadoTemperatura.main.temp);
        setDescricao(dadoTemperatura.weather[0].description);
        console.log(descricao);
      });
  };

  if (+stateTemperatura >= 25 && descricao == 'céu limpo') {
    Background = Calor;
  } else if (+stateTemperatura <= 25 && descricao == 'nuvens dispersas' || +stateTemperatura <= 25 && descricao == 'céu limpo') {
    Background = Frio;
  }

  if (descricao == 'nublado' || descricao == 'algumas nuvens') {
    Background = Nublado;
  } else if (descricao == 'chuva') {
    Background = Chuva;
  } else if (descricao == 'tempestade') {
    Background = Tempestade;
  }

  const dadoEntrada = (evento) => {
    setCidade(evento.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={ Background } style={styles.background}>
        <Text style={styles.title}>Clima Geek</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome da cidade"
          onChange={dadoEntrada}
        />
        <Button title="Buscar" onPress={callApi} />
        {stateTemperatura !== null && (
          <WeatherCard
            temperature={stateTemperatura}
            description={descricao}
            city={cidade}
          />
        )}
      </ImageBackground>
    </View>
  );
}
