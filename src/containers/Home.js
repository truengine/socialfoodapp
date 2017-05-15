import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { Actions } from 'react-native-router-flux';

const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { searching: false, ingredientsInput: '' }
  }

  searchPressed() {
    this.setState({ searching: true })
    this.props.fetchRecipes(this.state.ingredientsInput).then( (res) => {
      this.setState({ searching: false })
    });
  }

  logoPress() {
    Actions.main({ type: 'reset' });
  }

  imagePressed() {
    console.log('Hi');
    console.log(this);
  }

  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.searchSection}>
        <TouchableOpacity style={styles.header_logob} onPress={this.logoPress.bind()}>
        <Image style={styles.header_logo} source={require('../../assets/logo/splash.png')} />
        </TouchableOpacity>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.searchInput}
            returnKeyType="search"
            placeholder="Ingredients Here"
            onChangeText={(ingredientsInput) => this.setState({ ingredientsInput })}
            value={this.state.ingredientsInput}
            />

      <TouchableHighlight
      style={styles.searchButton}
      onPress={() => this.searchPressed()}
      >
      <Image
          style={styles.searchStyle}
          source={require('../../assets/images/Search_button.png')}
      />
      </TouchableHighlight>
      </View>
        <ScrollView style={styles.scrollSection}>
          {!this.state.searching && this.recipes().map((recipe) => {
            return (
              <TouchableHighlight key={recipe.id} onPress={() => this.imagePressed.bind(this)}>
                <View>
                  <Image source={ { uri: recipe.image } } style={styles.resultImage} />
                  <Text style={styles.resultText} >{recipe.title}</Text>
                </View>
              </TouchableHighlight>)
          })}
          {this.state.searching ? <Text>Searching...</Text> : <Image style={styles.logo} source={require('../../assets/logo/splash.png')} />}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header_logob: {
    marginTop: 25,
    width: 70,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_logo: {
    width: 30,
    height: 15,
  },
  logo: {
      marginTop: 180,
      width: 360,
      height: 100
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchSection: {
    height: 41,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    flex: 0.1,
    backgroundColor: '#C0C0C0'
  },
  scrollSection: {
    flex: 1,
    backgroundColor: '#D18343',
    margin: 0
  },
  searchButton: {
    flex: 0.3,
    height: 40,
    marginBottom: 5,
    borderWidth: 0,
    borderColor: '#000'
  },
  searchInput: {
    flex: 0.7,
    color: '#000',
    width: 200,
    height: 40,
    marginBottom: 2,
    marginTop: 10
  },
  resultText: {
    backgroundColor: '#CCBA3E',
    color: '#000',
    height: 20,
    textAlign: 'center',
  },
  resultImage: {
    height: 150,
    borderRadius: 2
  },
  searchStyle: {
      height: 40,
      width: 50,
      marginLeft: 20
  }
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  };
}

export default connect(mapStateToProps)(Home);
