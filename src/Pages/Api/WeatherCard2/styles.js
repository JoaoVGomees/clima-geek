import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  weatherInfo: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default styles;