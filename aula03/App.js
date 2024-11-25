import HomeScreen from './screens/HomeScreen'; // Certifique-se de que está sem as chaves.
import DetailsScreen from './screens/DetailsScreen'; // Também sem as chaves.

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
