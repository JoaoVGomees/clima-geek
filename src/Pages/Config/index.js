import React from 'react';
import * as S from './styles';
import { useTheme } from '../../Context';

export default function Config() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <S.Container>
      <S.StyledButton onPress={toggleTheme}>
        <S.ButtonText>Alternar para o modo {isDarkTheme ? 'Claro' : 'Escuro'}</S.ButtonText>
      </S.StyledButton>
      <S.StyledButton onPress={() => { /* Função de edição */ }}>
        <S.ButtonText>Editar</S.ButtonText>
      </S.StyledButton>
      <S.StyledButton onPress={() => { /* Função de limpeza */ }}>
        <S.ButtonText>Limpar</S.ButtonText>
      </S.StyledButton>
    </S.Container>
  );
}