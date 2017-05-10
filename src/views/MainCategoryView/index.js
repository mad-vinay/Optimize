import React, { Component } from 'react';
import Container from '../../components/wrapper';
import TouchableHighlightBtn from '../../components/highlight-btn';
import TouchableOpacityBtn from '../../components/opacity-btn';
import NavBar from '../../components/navbar';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';

export default class extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
        	<NavBar styles={styles.navWrapper}>
        		<TouchableOpacityBtn
        			navigator={this.props.navigation} screen='Login'
        			onPress = { this.onPress }
        			textColor='#ff9f02'
        			styles={styles.logoutButton}
        			label="Logout"/>
		    </NavBar>
		    <View style={styles.imageWrapper}>
		        <View style={styles.imageContainer}>
		        	<Image
						style={styles.logo}
						source={require('../../images/Optimize-logo.png')}
			        />
			     </View>
		        <Container>
				    <TouchableHighlightBtn navigator={this.props.navigation} screen='ManageCase' onPress = { this.onPress }
				        styles={styles.transparentButton}
				        label="Manage Cases"
				    />
				</Container>
				<Container>
				    <TouchableHighlightBtn screen='Preferences' navigator={this.props.navigation} onPress = { this.onPress }
				        styles={styles.transparentButton}
				        label="Preferences"
				    />
				</Container>
				<Container>
				    <TouchableHighlightBtn navigator={this.props.navigation} screen='SetInfo' onPress = { this.onPress }
				        styles={styles.transparentButton}
				        onPress = { this.btnPress }
				        label="Set Info"
				    />
				</Container>
				<Container>
				    <TouchableHighlightBtn
				        styles={styles.transparentButton}
				        onPress = { this.btnPress }
				        label="Reports"
				    />
				</Container>
				<Container>
				    <TouchableHighlightBtn
				        styles={styles.transparentButton}
				        onPress = { this.btnPress }
				        label="Sync Data"
				    >
				    </TouchableHighlightBtn>
				</Container>
			</View>
        </View>
        );
    }
}