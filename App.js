/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window')
console.log('width ',width)
console.log('height ',height)

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class App extends Component {
	
	render() {
		return (
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
		position: 'absolute',
		flex: 1,
		// width:width,
		// height:height
	}
});
