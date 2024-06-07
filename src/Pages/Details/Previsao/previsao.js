import * as S from "./styles";

export default function Previsao() {
  const nome = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

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
                <S.MainForecastContainer>
                    {nome.map((dia, index) => (
                        <S.MainForecast key={index}>
                            <S.MainForecastDay>{dia}</S.MainForecastDay>
                            <S.MainForecastMinMax>20°C/ 30°C</S.MainForecastMinMax>
                        </S.MainForecast>
                    ))}
                </S.MainForecastContainer>
            </S.MainContainer>
        </S.Container>
    )
}