import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  justifyContent,
  ListViewBase,
  List,
  TextInput,
  Image,
  TouchableOpacity,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function DarkLandia() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#4D4365',
      }}>
      <View style={{alignItems: 'center'}}>
        <Image style={styles.imgPlaca} source={require('./src/placas.jpg')} />
        <Text>Placas de video Asus</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.imgPlaca}
          source={require('./src/monitores.jpg')}
        />
        <Text>Monitores </Text>
      </View>
      <Image style={styles.imgPrincipal} source={require('./src/Capa.jpg')} />
    </View>
  );
}

function Novidades() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4365',
      }}>
      <Image style={styles.imgNovidade} source={require('./src/teclado.jpg')} />
      <Text>Teclado Mecanico de ultima geração, em breve no estoque.</Text>
    </View>
  );
}

function Sobre() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4D4365',
      }}>
      <Text style={{fontSize: 40}}>
        {' '}
        Empresa fundada em 2021, Temos como objetivo trazer os melhores
        periferico e acessorios gamers para todos os públicos.
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="DarkLandia"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="DarkLandia"
        component={DarkLandia}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Novidades"
        component={Novidades}
        options={{
          tabBarLabel: 'Novidades',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  imgPlaca: {
    width: 150,
    height: 200,
  },
  imgPrincipal: {
    height: 155,
    width: 350,
    bottom: 40,
    justifyContent: 'center',
    position: 'absolute',
  },
  imgNovidade: {
    height: 300,
    width: 350,
  },
});
