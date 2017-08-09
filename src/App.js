import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//
import { Header, Button, Spinner, CardSection } from './components/common';
import reducers from "./reducers";
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
      <Provider store = {createStore(reducers)}>
        <View>
          <Header headerText={"Tech Stack"} />
        </View>
      </Provider>
    );
  }
}
 