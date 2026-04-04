import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 5px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 5px;
  background-color: #3b3dbf;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonGreen = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 5px;
  background-color: #00b94a;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #171717;
`;

export const LoadingIconLarge = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundApp = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff;
`;

export const ContainerHeader = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-height: 60px;
`;

export const TitleHeader = styled.Text`
  font-size: 20px;
  margin-left: 8px;
`;

export const ButtonMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ListBalance = styled.FlatList`
  max-height: 130px;
`;

export const ContainerBalanceItem = styled.View`
  background-color: #${props => props.bg};
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;

export const LabelBalanceItem = styled.Text`
  font-size: 19px;
  color: #fff;
  font-weight: bold;
`;

export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #fff;
`;

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  background-color: ${props => props.checked ? '#FFF' : '#e7e7e7' };
  width: 48%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${props => props.checked ? '#919191' : '#afafaf' };
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 17px;
`;