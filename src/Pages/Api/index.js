import { useState } from "react";
import { Text, View, StatusBar, ImageBackground, TextInput, Button } from 'react-native';

import { styles } from "./styles";
import WeatherCard2 from './WeatherCard2'

export default function Avaliacao() {
  const [stateTemperatura, setStateTemperatura] = useState();
  const [descricao, setDescricao] = useState("desc");
  const [cidade, setCidade] = useState("Cidade");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=9d7dda8c0f3471b54505c0a37583066e`;

  const callApi = () => {

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dadoTemperatura) => {
        setStateTemperatura(dadoTemperatura.main.temp);
        setDescricao(dadoTemperatura.weather[0].description);
        console.log(descricao);
      });
  };
  const dadoEntrada = (evento) => {
    setCidade(evento.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.background}>
        <Text style={styles.title}>Clima Geek</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome da cidade"
          onChange={dadoEntrada}
        />
        <Button title="Buscar" onPress={callApi} />
        {stateTemperatura !== null && (
          <WeatherCard2
            temperature={stateTemperatura}
            description={descricao}
            city={cidade}
          />
        )}
      </View>
    </View>
  );
}