import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform } from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';
import { connect } from 'react-redux';
import moment from "moment";

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 25,

        };
    }
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        let allDocuments;
        allDocuments = [...this.props.subscriptions, ...this.props.warranties]
        allDocuments.sort((a, b) => moment(a.value.chosenDate) - moment(b.value.chosenDate));
        this.setState({
            allDocuments
        })

    }

    getRecentstItem = () => {
        let allDocuments = [...this.props.subscriptions, ...this.props.warranties]
        allDocuments.sort((a, b) => moment(a.value.chosenDate) - moment(b.value.chosenDate));
        let notExpired = allDocuments.filter(val => moment(val.value.chosenDate).isAfter(moment()))
        this.calculateDaysLeft(notExpired[0].value.chosenDate);
        let daysLeft = this.calculateDaysLeft(notExpired[0].value.chosenDate)
        if (daysLeft < this.state.days) {
            console.log(notExpired[0].value.name, 'is expiring in', daysLeft, 'days');
        }
        else console.log('nenen');
    }

    calculateDaysLeft = (endDate) => {
        const { rightTextStyle } = styles;
        endDate = !moment.isMoment(endDate) && moment(endDate)
        let startDate = moment().startOf('day');
        let diff = moment.duration(endDate.diff(startDate)).asDays();
        return diff;

    }


    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange = (appState) => {
        if (appState === 'background') {
            let date = new Date(Date.now() + (6 * 1000));

            PushNotification.localNotificationSchedule({
                message: 'this message', // <----
                date: date // in 60 secs
            })
        }
    }

    render() {
        return (

            <View style={styles.container}>
                {this.getRecentstItem()}
                <Text style={styles.welcome}>
                    Choose your notification time in days.
        </Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.days}
                    onValueChange={(days) => this.setState({ days })}
                >
                    <Picker.Item label="10" value={10} />
                    <Picker.Item label="15" value={15} />
                    <Picker.Item label="20" value={20} />
                </Picker>
                <PushController />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    picker: {
        width: 100,
    },
});

function mapStateToProps(state) {

    return {
        subscriptions: state.documentReducer.subscriptions,
        warranties: state.documentReducer.warranties
    }
};

export default connect(mapStateToProps, null)(Notifications);
