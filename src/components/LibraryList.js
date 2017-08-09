import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createStore } from 'redux';

//
import { Header, Button, Spinner, CardSection } from './components/common';
import reducers from "./reducers";
//
class LibraryList extends Component {
  
  constructor(props) {
    super(props);
  }

  render()
  {
    return <View/>;
  }
}

export default connect()(LibraryList);