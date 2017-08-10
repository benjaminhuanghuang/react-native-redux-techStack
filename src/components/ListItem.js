import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { createStore } from 'redux';
//
import { CardSection } from './common';
import * as actions from '../actions';

//
class ListItem extends Component {
  renderDescription() {
    if (this.props.library.id === this.props.selectLibraryId) {
      return (
        <Text>{this.props.library.description}</Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}
const mapStateToProps = state => {
  return { selectLibraryId: state.selectedLibraryId };
}
export default connect(mapStateToProps, actions)(ListItem);