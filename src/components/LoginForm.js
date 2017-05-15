import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  regButtonPress() {
    Actions.regScene();
  }

  continueGuest() {
    Actions.main();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <TouchableOpacity
      onPress={this.onButtonPress.bind(this)}
      style={styles.loginContainer}
      >
      <Image
          style={styles.logo}
          source={require('../../assets/drawables/login_btn.png')}
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
      <Text style={styles.errorTextStyle}>
      {this.props.error}
      </Text>

        <Card>
          <CardSection>
            <Input
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              keyboardType="email-address"
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>


          <CardSection style={{ backgroundColor: '#43A9D1' }}>
            {this.renderButton()}
          </CardSection>
        </Card>
        <View style={styles.rowStyle2}>
    <Text style={styles.text2} onPress={this.regButtonPress.bind(this)}>
        Sign Up
    </Text>


    <Text style={styles.divider}>
        |
    </Text>
    <Text style={styles.text1}>
        Continue as
    </Text>
    <Text style={styles.text2} onPress={this.continueGuest.bind(this)}>
        Guest
    </Text>
</View>
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
      backgroundColor: '#43A9D1'
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
text1: {
    textAlign: 'right',
    paddingRight: 5,
    fontFamily: 'gillsans',
    color: 'white',
    fontSize: 18
},

text2: {
    textAlign: 'right',
    paddingRight: 8,
    fontFamily: 'gillsans',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
},

divider: {
    textAlign: 'right',
    paddingRight: 8,
    fontFamily: 'gillsans',
    fontWeight: 'bold',
    color: '#3BCC53',
    fontSize: 20
},

rowStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'

},

rowStyle2: {
    flexDirection: 'row',
    justifyContent: 'center'

}
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
})(LoginForm);
