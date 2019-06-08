import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddButton = props => {
    return (

        <TouchableOpacity onPress={props.handleSubmit} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: "#04A7F1",
        alignItems: "center",
        justifyContent: "center",
        height: 60
    },
    textStyle: {
        fontWeight: "700",
        color: "#fff",
        fontSize: 22,
    }
});

export default AddButton;