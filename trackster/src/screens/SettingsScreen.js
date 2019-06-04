import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, } from 'react-native';
import { fire } from '../keys/firebaseKeys';

import Icon from 'react-native-vector-icons/Ionicons';
class SettingsScreen extends React.Component {

    onSignOutPress = () => {
        fire.auth().signOut()
            .then(() => { Alert.alert('Goodbye!') }, (error) => { Alert.alert(error.message); });
    }

    render = () => {
        return (
            <View>
                <Text>SettingsScreen</Text>

                <TouchableOpacity
                    onPress={this.onSignOutPress}
                >
                    <Icon name="md-power" size={25} color={'red'} style={{ marginRight: 20, marginTop: 5 }} />
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default SettingsScreen;