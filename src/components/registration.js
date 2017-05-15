import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class RegForm extends Component {

	state = { phone: '', email: '', password: '', firstname: '', lastname: '', error: '', loading: false };


	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}

	onButtonPress() {
		const { email, password } = this.state;
		this.setState({ error: '', loading: true });
		firebase.auth().createUserWithEmailAndPassword(email, password);
		Actions.login();
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return (
			<TouchableOpacity
      onPress={this.onButtonPress.bind(this)}
      style={styles.loginContainer}
      >
      <Image
          style={styles.logo}
          source={require('../../assets/drawables/Signmeup_btn.png')}
      />
      </TouchableOpacity>
			);
	}
	render() {
		return (
			<View style={styles.container1}>
			<View style={styles.logoContainer}>
					<Image
							style={styles.logo}
							source={require('../../assets/logo/splash.png')}
					/>
			</View>
			<Card>
				<CardSection>
					<Input
						label="First Name"
						placeHolder="Firstname"
						value={this.state.firstname}
						onChangeText={firstname => this.setState({ firstname })}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Last Name"
						placeHolder="Surname"
						value={this.state.lastname}
						onChangeText={lastname => this.setState({ lastname })}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Phone Number"
						placeHolder="Phone"
						value={this.state.phone}
						onChangeText={phone => this.setState({ phone })}
						keyboardType="phone-pad"
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Email"
						placeHolder="user@gmail.com"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Password"
						secureTextEntry
						placeHolder="password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<CardSection style={{ backgroundColor: '#AC45CE' }}>
					{this.renderButton()}
				</CardSection>
				<Text style={styles.errorTextStyle}>{this.state.error}</Text>
			</Card>
			</View>
			);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	logoContainer: {
			alignItems: 'center',
			flexGrow: 1,
			paddingTop: 50
	},
	container1: {
			flex: 1,
			backgroundColor: '#AC45CE'
	},
	logo: {
			width: 141,
			height: 43
	},
	loginContainer: {
		//marginTop = distance button is from previous object
		alignItems: 'center',
		flexGrow: 1,
},
};


export default RegForm;
