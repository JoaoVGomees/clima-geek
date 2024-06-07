import styled from "styled-components/native";

import { StatusBar } from 'react-native';

const StatusBarHeight = StatusBar.currentHeight + 'px';

export const Localizacao = styled.View`
  flex: 1;
  padding-top: ${ StatusBarHeight };
`;

export const LocalizacaoHeader = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  padding-top: 20px;
  font-size: 27px;
  font-weight: bold;
  color: #22222B;
`;

export const Input = styled.TextInput`
  margin-top: 40px;
  padding: 17px 90px;
  width: 400px;
  height: 60px;
  border-radius: 5px;
  background-color: #f7f7f7;
`;