import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'


class TimelineSubs extends React.Component {

    getMostRecentDate = () => {
        this.props.subscriptions.sort((a, b) => a.date - b.date);
    }

    render = () => {
        console.log('propkee', this.props);
        return (
            <View>

                <Text>
                    {this.props.subscriptions[0].value}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

function mapStateToProps(state) {

    return {
        subscriptions: state.documentReducer.subscriptions,
    }
};

export default connect(mapStateToProps, null)(TimelineSubs);
