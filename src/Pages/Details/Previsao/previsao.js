import * as S from "./styles"
import { Text } from "react-native"
export default function Previsao() {

    const nome = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return (
        <S.Container>
            <S.HeaderContainer>
                <S.HeaderTitle>Previsão</S.HeaderTitle>
            </S.HeaderContainer>
            <S.MainContainer>
                <S.MainClimaDetails>
                    <S.MainTempMinMax>
                        <S.MainTempDetail>26°C</S.MainTempDetail>
                        <S.MainMaxMinDetail>Min: 22°/Máx: 28°</S.MainMaxMinDetail>
                    </S.MainTempMinMax>
                    <S.MainLocationDesc>
                        <S.MainLocationContainer>
                            <S.MainLocationDetail>São Paulo</S.MainLocationDetail>
                            <S.MainUfDetail>SP</S.MainUfDetail>
                        </S.MainLocationContainer>
                        <S.MainDesc>Limpo</S.MainDesc>
                    </S.MainLocationDesc>
                </S.MainClimaDetails>
                <S.MainForecast>
                    <S.MainForecastDay>{nome[0]}</S.MainForecastDay>
                    <S.MainForecastMinMax>23°/34°</S.MainForecastMinMax>
                </S.MainForecast>
            </S.MainContainer>
        </S.Container>
    )
}