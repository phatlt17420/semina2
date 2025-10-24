// React Native Finish Current Screen while Navigating to Next Screen
// https://aboutreact.com/react-native-finish-current-screen-while-navigating-to-next-screen/


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './pages/CameraScreen';
import HomeScreen from './pages/HomeScreen';
import ScreenshotScreen from './pages/ScreenshotScreen';
import ChartScreen from './pages/ChartScreen';
import HyperLinkingApp from './pages/HyperLinkingPage'
import MD5 from './pages/MD5';
import ProfanityFilter from './pages/ProfanityFilter';
import QrCode from './pages/QrCode';
import SHA256 from './pages/SHA256';
import Speedometer from './pages/SpeedoMeterGraph';
import NewPieChart from './pages/PieChart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Screenshot" component={ScreenshotScreen} />
        <Stack.Screen name="Chart" component={ChartScreen} />
        <Stack.Screen name="PieChart" component={NewPieChart} />
        <Stack.Screen name="HyperLinking" component={HyperLinkingApp} />
        <Stack.Screen name="MD5" component={MD5} />
        <Stack.Screen name="ProfanityFilter" component={ProfanityFilter} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="SHA256" component={SHA256} />
        <Stack.Screen name="SpeedometerGraph" component={Speedometer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;