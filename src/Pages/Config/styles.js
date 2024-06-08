import styled from "styled-components/native";

export const Config = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledButton = styled.View`
  background-color: #cfe1fa;
  padding: 15px 30px;
  border-radius: 5px;
  margin: 10px 0;
  align-items: center;
`;

export const Texto = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
