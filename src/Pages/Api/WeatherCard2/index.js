import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function WeatherCard2 ({ temperature, description, city }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{city}</Text>
      <View style={styles.weatherInfo}>
        <Text style={styles.text}>Temperatura: {temperature}°C</Text>
        <Text style={styles.text}>Descrição: {description}</Text>
      </View>
    </View>
  );
}