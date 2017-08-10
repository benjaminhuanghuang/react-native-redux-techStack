import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { createStore } from 'redux';
//
import { CardSection } from './common';
//
class ListItem extends Component {
  render(){
    return (
      <CardSection>
        <Text> {this.props.library.title} </Text>
      </CardSection>
      
    );
  }
}

export default ListItem;