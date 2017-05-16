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
  TouchableHighlight,
  ListView
} from 'react-native';
import styles from './style';
import team from '../../data/team.json';
export default class Teams extends Component {


	onClick = () => {	
	   	this.props.navigation.navigate('MainCategory');
	}

	constructor(props) {
	    super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	     dataSource: ds.cloneWithRows(team.teamName),
	    };
	}
	renderRow = (name) => {
	    return (
	    	<View>
				<TouchableHighlight style={styles.transparentButton} navigator={this.props.navigation}  onPress = { this.onClick }>
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
							source={require('../../images/Optimize-logo.png')}
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
