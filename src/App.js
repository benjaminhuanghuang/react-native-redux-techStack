import React, { Component } from 'react';
import { View } from 'react-native';
//
import { Header, Button, Spinner, CardSection } from './components/common';
//
export default class App extends Component {
  state = {
    loggedIn: null,
  }
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  
  }

  
  render() {
    return (
      <View>
        <Header headerText={"Tech Stack"} />
      </View>
    );
  }
}
 