import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || "large"} color='#0DAAB7' />
        </View>
    )
}


const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export { Spinner };