import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${ ({ theme }) => theme.colors.backgroundOption};
  padding: 15px 30px;
  border-radius: 5px;
  margin: 10px 0;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;