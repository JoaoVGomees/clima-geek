import styled from "styled-components/native";

export const Config = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Texto = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};

`