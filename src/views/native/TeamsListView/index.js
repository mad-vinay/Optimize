import React, { Component } from 'react';
import Container from '../../../components/native/wrapper';
import TouchableHighlightBtn from '../../../components/native/highlight-btn';
import TouchableOpacityBtn from '../../../components/native/opacity-btn';
import NavBar from '../../../components/native/navbar';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';
import styles from './style';
import app from '../../../json/team.json';
export default class Teams extends Component {

	onClicked = (name) => {
	   	this.props.navigation.navigate('MainCategory', {name:name});
	}

	constructor(props) {
	    super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	     dataSource: ds.cloneWithRows(app.teamName),
	    };
	}
	renderRow = (name) => {
	    return (
	    	<View style={styles.btnWrapper}>
				<TouchableHighlight style={styles.transparentButton} navigator={this.props.navigation} onPress = { () => this.onClicked(name) }>
					<Text style={styles.textStyle}>{name}</Text>
				</TouchableHighlight>
			</View>
	    );
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
							source={require('../../../images/Optimize-logo.png')}
				        />
				     </View>
				     <ListView
				        dataSource = {this.state.dataSource}
				        renderRow = {this.renderRow}>
				      </ListView>
				</View>
	        </View>
        );
    }
}

