import React from 'react';
import { View, Text } from 'react-native';
class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Lab Monitor
        </Text>
      </View>
    );
  }
}
const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(149, 195, 200)'
   // backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}
export default SplashScreen;

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: StackNavigator
});
export default createAppContainer(InitialNavigator);


const StackNavigator = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
      headerStyle: styles.header,
      }
    },
    Labs: {
      screen: Labs,
      navigationOptions: {
      headerStyle: styles.header,
      }
    },
  },
  {
    headerMode: 'screen',
}
);

//const AppNavigator = createAppContainer(SwitchNavigator);
export default createAppContainer(StackNavigator);