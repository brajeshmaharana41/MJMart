import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';

import { Appbar } from 'react-native-paper';
import { List, Colors } from 'react-native-paper';

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <List.Icon color={Colors.white} icon="menu" />
        </TouchableOpacity>
        <View
          style={{
            flex: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{ ...material.headline, fontSize: 20, fontWeight: "bold", color: '#fffaf0' }}>
            Wellcome To Mj Mart
          </Text>
        </View>
        <TouchableOpacity
          //onPress={() => navigation.navigate('Search')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <List.Icon color={Colors.white} icon="magnify" />
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={() => navigation.navigate('Search')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <List.Icon color={Colors.white} icon="bell-ring" />
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={() => navigation.navigate('Search')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <List.Icon color={Colors.white} icon="cart" />
        </TouchableOpacity>
      </Appbar>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#560CCE',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  image: {
    width: 25,
    height: 25,
    marginBottom: 1,
  },
});
