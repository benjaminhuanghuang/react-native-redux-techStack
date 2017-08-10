import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//
import { Header, Button, Spinner, CardSection } from './components/common';
import LibraryList from './components/LibraryList';
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
        <View style={{ flex:1}}>
          <Header headerText="Tech Stack"></Header>
          <LibraryList></LibraryList>
        </View>
      </Provider>
    );
  }
}
 