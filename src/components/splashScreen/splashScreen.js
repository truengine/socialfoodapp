/**
 * Created by geraldinesullivan on 16/03/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet, View, Image
} from 'react-native'

class SplashScreen extends Component{

    constructor(props){
        super(props);

        this.state ={
            done: false
        }
    }

    timer(){
        setTimeout(() =>{
            this.setState({
                done: true

            });
        }, this.props.duration || 1000)

    }

    componentDidMount(){
        this.timer();
    }


    render(){
        return(
            this.state.done ?
                //if done, show all that is nested
                ({...this.props.children})
                :
                (
                //Display Splash Screen
                <View style = {[styles.container, this.props.backgroundColor]} >
                    <Image style={styles.logo}  source = {this.props.logo}/>
                </View>)
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        //image size must be proportional to source image.
        width: 141,
        height: 43
    }

});

export default SplashScreen
