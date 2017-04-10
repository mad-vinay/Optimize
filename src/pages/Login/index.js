import React, { Component } from 'react';
import Container from '../../components/Container';
import TouchableHighlightBtn from '../../components/TouchableHighlightBtn';
import Ticker from '../../components/Ticker';
import NavBar from '../../components/NavBar';


import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './style';

export default class Login extends Component {

	clearText(fieldName) {
		this.refs[fieldName].setNativeProps({text: ''});
	}

	render() {
	    return (

	    	<View>
		    	<NavBar style={styles.header}>
	        		<Text style={styles.headerText}>v3.4</Text>
		    		<Text style={styles.headerText}>T000v34-DFW1</Text>
			    </NavBar>
		        <View style={styles.scroll}>
			        <View style={styles.imageContainer}>
			        	<Image
							style={styles.logo}
							source={require('../../images/Optimize-logo.png')}
				        />
				     </View>
			        <Container style={styles.containerstyle}>
				        <View style={styles.textInputWrap}>
						    <TextInput
						        style={styles.textInput}
						        placeholder = 'Email'
						        underlineColorAndroid='transparent'
						        placeholderTextColor="grey"
						        ref={'textInput1'}
						    />
						    <TouchableOpacity style={styles.clearBtn} onPress={() => this.clearText('textInput1')}>
								<Image
									style={styles.clearIcon}
									source={require('../../images/clear-icon.png')}
					        	/>
					        </TouchableOpacity>
					    </View>
					    <View style={styles.remembermeTextWrap}>
						    <Text style={styles.rememberText}>Remember Email</Text>
						    <Ticker/>
						</View>
					</Container>
					<Container>
						<View style={styles.textInputWrap}>
						    <TextInput
						        secureTextEntry={true}
						        style={styles.textInput}
						        placeholder = 'Password'
						        underlineColorAndroid='transparent'
						        placeholderTextColor="grey"
						        ref={'textInput2'}
						    />
						    <TouchableOpacity style={styles.clearBtn} onPress={() => this.clearText('textInput2')}>
					          <Image
									style={styles.clearIcon}
									source={require('../../images/clear-icon.png')}
					        	/>
					        </TouchableOpacity>
					    </View>
					    <View style={styles.remembermeTextWrap}>
					    	<Text style={styles.rememberText}>Remember Password</Text>
					        <Ticker/>
						</View>
					</Container>
					<Container>
					    <TouchableHighlightBtn
					        styles={styles.transparentButton}
					        navigator={this.props.navigator} id='MainCategory'
					    >
					        <Text style={styles.buttonText}>Login</Text>
					    </TouchableHighlightBtn>
					</Container>
		        </View>
		    </View>
	    );
	}
}

