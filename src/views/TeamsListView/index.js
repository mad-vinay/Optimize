import React, { Component } from 'react';
 import Container from '../../components/wrapper';
 import TouchableHighlightBtn from '../../components/highlight-btn';
 import TouchableOpacityBtn from '../../components/opacity-btn';
 import NavBar from '../../components/navbar';

 import {
   StyleSheet,
   Text,
   View,
   Image,
   Picker,
   TouchableHighlight
 } from 'react-native';
 import styles from './style';

 export default class Teams extends Component {

 	onClick = () => {
 	   	this.props.navigation.navigate('MainCategory');
 	}

 	constructor() {
 		super();
 		this.state = {teams: ''};
 	}

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
         			<Text style={styles.headingText} >Select Team</Text>
 		    </NavBar>
 		    <View style={styles.imageWrapper}>
 		        <View style={styles.imageContainer}>
 		        	<Image
 						style={styles.logo}
 						source={require('../../images/Optimize-logo.png')}
 			        />
 			     </View>
 			    <View style={styles.pickerWrap}>
 					<Picker style={styles.picker}
 					  selectedValue={this.state.teams}
 					  onValueChange={(name) => {this.setState({teams: name})}}>
 					  <Picker.Item label="Select Team" value="key0" />
 					  <Picker.Item label="TEAM A" value="a" />
 					  <Picker.Item label="TEAM B" value="b" />
 					  <Picker.Item label="TEAM C" value="c" />
 					  <Picker.Item label="TEAM D" value="d" />
 					</Picker>
 					<Image
 						style={styles.arrow}
 						source={require('../../images/arrow.png')}
 			        />
 		        </View>
 				<TouchableHighlight style={styles.transparentButton} onPress = { this.onClick } >
 					<Text style={styles.buttonText}>Proceed</Text>
 				</TouchableHighlight>
 			</View>
         </View>
         );
     }
 }