import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from '../components/Header'
import { StatusBar } from 'react-native'

import { SliderBox } from "react-native-image-slider-box";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [ ]
    };
  }

  componentDidMount() {
      fetch('http://keita.co.in/mjmart/api/banner.php')
      .then(response => response.json())
      .then(json => this.setState({ users: json.data }));
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
        {
          this.state.users.length == 0
            ? 'Loading users...'
            : this.state.users.map(data => (
              <SliderBox key={data.id}>
                <img src={data.bimg} />
                <figcaption>
                  {data.bimg}
                </figcaption>
              </SliderBox>
            ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});