import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingsScreen extends React.Component {
    render = () => {
        return (
            <View style={[styles.container]}>
                <Text>SettingsScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default SettingsScreen;