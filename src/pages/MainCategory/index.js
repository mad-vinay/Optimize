import React, { Component } from 'react';
import Container from '../../components/Container';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';

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
	onPress = () => {
		const { navigator } = this.props;
		navigator.push({
		  id: 'Login'
		});
	}
    render() {
        return (
        <View style={styles.wrapper}>
        	<NavBar styles={styles.navWrapper}>
        		<Button textColor='#ff9f02' styles={styles.logoutButton} onPress = { this.onPress } label="Logout"/>
		    </NavBar>
		    <View style={styles.imageWrapper}>
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
        </View>
        );
    }
}