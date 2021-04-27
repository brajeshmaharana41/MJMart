import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Image   
} from 'react-native';
import { List, Colors } from 'react-native-paper';


export function DrawerContent(props) {
  return (
    <View style={styles.drawer}>
      <View style={styles.drawerhead} >
          <Image source={require('../assets/17.jpeg')} style={styles.image} />
      </View>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
         // props.navigation.navigate('StartScreen');
        //}}
        >
          <List.Icon color={Colors.black} icon="home" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
       //   props.navigation.navigate('StartScreen');
       // }}
       >
           <List.Icon color={Colors.black} icon="account" />
        <Text style={styles.text}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
       // onPress={() => {
         // props.navigation.navigate('StartScreen');
        ///}}
        >
          <List.Icon color={Colors.black} icon="cart" />
        <Text style={styles.text}>My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
          //props.navigation.navigate('StartScreen');
       // }}
        >
          <List.Icon color={Colors.black} icon="map-marker" />
        <Text style={styles.text}>My address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
          //props.navigation.navigate('StartScreen');
       // }}
        >
          <List.Icon color={Colors.black} icon="clipboard-text-outline" />
        <Text style={styles.text}>Feed Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
          //props.navigation.navigate('StartScreen');
       // }}
        >
          <List.Icon color={Colors.black} icon="phone-message" />
        <Text style={styles.text}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
         // props.navigation.navigate('StartScreen');
       // }}
        >
          <List.Icon color={Colors.black} icon="share-variant" />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
         // props.navigation.navigate('StartScreen');
       // }}
        >
          <List.Icon color={Colors.black} icon="information" />
        <Text style={styles.text}>About As</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        //onPress={() => {
         // props.navigation.navigate('StartScreen');
       // }}
        >
          <List.Icon color={Colors.black} icon="shield-account" />
        <Text style={styles.text}>Terms and Condition</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          BackHandler.exitApp();
        }}>
          <List.Icon color={Colors.black} icon="location-exit" />
        <Text style={styles.text}>LogOut</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footertext}>
          Developed with Love by
        </Text>
        <Text style={styles.footertext}> Brajesh Maharana</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  links: {
    //backgroundColor: 'grey',
    height: 45,
    //justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  image: {
    width: 155,
    height: 75,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  icons:{
    width: 16,
    height: 16,
    marginRight: 15,
  },
  footertext: {
    color: '#000',
    opacity: 0.4,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  TouchableOpacity:{
    borderBottomColor: 'black',
    borderBottomWidth: 2

  },
  drawerhead:{
    width: 252,
    height: 145,
    backgroundColor: ''
  } 
});
