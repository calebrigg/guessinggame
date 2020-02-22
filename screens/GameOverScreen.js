import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Color from '../constants/colours';

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={{textAlign:'center', fontSize:28, color:Color.cancel}}>Game Over</Text>
            <Card style={styles.card}>
                    <View style={styles.container}>
                    <Text>Number of Guesses: {props.guessNum}</Text>
                    <Text>The Number Was: {props.userNum}</Text>
                    <Button title="NEW GAME" onPress={props.onRestart} color={Color.continue}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '80%',
        height: '40%',
        maxWidth: '80%',
        maxHeight: '50%',
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        marginTop: 100,
    }
});

export default GameOverScreen;