import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};

`;

export const HeaderContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 66.76px;
`;

export const HeaderTitle = styled.Text`
    font-size: 27px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
`;

export const MainContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 39.86px;
`;

export const MainClimaDetails = styled.View`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 75%;
`;

export const MainTempMinMax = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MainTempDetail = styled.Text`
    font-size: 32px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text};
    padding-right: 120px
`;

export const MainMaxMinDetail = styled.Text`
    font-size: 16px;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.text};
    padding-right: 58px;
`;

export const MainLocationDesc = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;

export const MainLocationContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 18px;
    padding-left: 58px;
`;

export const MainLocationDetail = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const MainUfDetail = styled.Text`
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text};
`;

export const MainDesc = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    padding-left: 114px;
`;

export const MainForecastContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15.65px;
`;

export const MainForecast = styled.View`
    margin-top: 31.89px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 75%;
    height: 46.13px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.backgroundOption};
    color: ${({ theme }) => theme.colors.text};
`;

export const MainForecastDay = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const MainForecastMinMax = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;