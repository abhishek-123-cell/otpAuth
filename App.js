import * as React from 'react';
import {Container,Header,Title,Content,Body,Text,Button,Item,Label} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import firebaseSetup from './setup'


  const HomeScreen=()=> {
    const {auth}=firebaseSetup();
    const [confirm,setConfirm]=React.useState(null);
        const [code,setCode]=React.useState('');
        const signIn = async (phoneNumber) => {
          const confirmation = await auth.signIn(phoneNumber);
          setConfirm(confirmation);
        };
        const confirmCode=async()=>{
try{
  alert('user sign in sucessfully');
await confirm.confirm(code);
}
catch(err){
alert(JSON.stringify(err));
}
        }

    if(!confirm){
      return (
        <Container>
          <Header>
            <Body>
              <Title>react-native firebase phone authentication</Title>
            </Body>
          </Header>
          <Content>
            <Button onPress={()=>signIn('')}>
<Text>phone no sign in</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  
      <Container>
        <Header>
          <Body>
            <Title>OTP Screen</Title>
          </Body>
        </Header>
        <Content>
          <Item inlineLabel>
            <Label>ENTER OTP</Label>
            <Item value={code} onChangeText={(text) => setCode(text)} />
            <Button onPress={() => confirmCode()}>
              <Text>confirm otp</Text>
            </Button>
          </Item>
        </Content>
      </Container>
  
  }


  const App=()=> {
    return (
   
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
  }
/////check system is running or not
export default App;
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>hello World</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <HomeScreen/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
