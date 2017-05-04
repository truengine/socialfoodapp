import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class RegForm extends Component {

	state = { email: '', password: '', firstname: '', lastname: '', error: '', loading: false };


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
			<Button onPress={this.onButtonPress.bind(this)}>
			Register
			</Button>
			);
	}
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="First Name"
						placeHolder="Joe"
						value={this.state.firstname}
						onChangeText={firstname => this.setState({ firstname })}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Last Name"
						placeHolder="Blogs"
						value={this.state.lastname}
						onChangeText={lastname => this.setState({ lastname })}
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

				<CardSection>
					{this.renderButton()}
				</CardSection>
				<Text style={styles.errorTextStyle}>{this.state.error}</Text>
			</Card>
			);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};


export default RegForm;
