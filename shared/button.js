import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function FlatButton({ text, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>GET STARTED</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button:{
        marginHorizontal:50,
        marginVertical:40,
        borderRadius:40,
        paddingHorizontal:15,
        paddingVertical:25,
        backgroundColor: '#652BB9',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})