import React, { Component } from 'react';
import Container from '../../components/Container';
import Button from '../../components/Button';

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
	        <View style={styles.imageContainer}>
	        	<Image
					style={styles.logo}
					source={require('../../images/Optimize-logo.png')}
		        />
		     </View>
	        <Container>
			    <Button 
			        styles={styles.transparentButton}
			        onPress = { this.btnPress }
			        label="Manage Cases"
			    />
			</Container>
			<Container>
			    <Button 
			        styles={styles.transparentButton}
			        onPress = { this.btnPress }
			        label="Preferences"
			    />
			</Container>
			<Container>
			    <Button 
			        styles={styles.transparentButton}
			        onPress = { this.btnPress }
			        label="Set Info"
			    />
			</Container>
			<Container>
			    <Button 
			        styles={styles.transparentButton}
			        onPress = { this.btnPress }
			        label="Reports"
			    />
			</Container>
			<Container>
			    <Button 
			        styles={styles.transparentButton}
			        onPress = { this.btnPress }
			        label="Sync Data"
			    >
			    </Button>
			</Container>
        </View>
        );
    }
}