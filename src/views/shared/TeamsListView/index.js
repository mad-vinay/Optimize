import React, { Component } from 'react';
import Image from '../../../components/shared/image';
import View from '../../../components/shared/view';
import Text from '../../../components/shared/text';
import List from '../../../components/shared/list-view';

import styles from './style';

import team from '../../../json/team.json';

export default class Teams extends Component {

	onClicked = (item) => {
	   	this.props.navigation.navigate('MainCategory', {name:item});
	}

	onPress = () => {
		this.props.navigation.navigate('Login');
	}

	renderRow = ({item}) => {
	    return (
	    	<View style={styles.btnWrapper}>
				<View style={styles.transparentButton} navigator={this.props.navigation} onClick = { () => this.onClicked(item) }>
					<Text style={styles.textStyle}>{item}</Text>
				</View>
			</View>
	    );
	}
    render() {
        return (
	        <View style={styles.wrapper}>
	        	<View style={styles.navWrapper}>
	        		<Text style={styles.headingText}>Select Team</Text>
	        		<View onClick = { this.onPress } style={styles.logoutButton}>
	        			<Text style={styles.logoutBtnText}>Logout</Text>
        			</View>
		    	</View>
		    	<View style={styles.container}>
			        <View style={styles.imageContainer}>
			        	<Image
							style={styles.logo}
							source={require('../../../images/Optimize-logo.png')}
				        />
				    </View>
					<List
						data={team.teamName}
						renderItem={this.renderRow}
					/>
				</View>
        	</View>
        );
    }
}

