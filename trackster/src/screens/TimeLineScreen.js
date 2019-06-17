import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import NavHeader from '../components/NavHeader';
import { Content } from 'native-base'
import TimelineSubs from '../components/TimelineDocs';
import TimelineSubscriptions from '../components/TimelineSubscriptions';
import TimelineWarranties from '../components/TimelineWarranties';


class TimelineScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleAll: true,
            toggleWarranties: false,
            toggleSubsriptions: false
        };
    }

    onPressAll = () => {
        console.log('press All!');
        this.setState({
            toggleSubsriptions: false,
            toggleWarranties: false,
            toggleAll: true
        })
    }

    onPressSubscriptions = () => {
        console.log('press All!');
        this.setState({
            toggleSubsriptions: true,
            toggleWarranties: false,
            toggleAll: false
        })
    }

    onPressWarranties = () => {
        this.setState({
            toggleSubsriptions: false,
            toggleWarranties: true,
            toggleAll: false
        })
    }

    render = () => {
        const { backgroundContainer } = styles
        const { toggleAll, toggleSubsriptions, toggleWarranties } = this.state
        return (
            <ImageBackground source={require('../../assets/timeline.png')} style={backgroundContainer}>

                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />

                <AppHeader headerText="Timeline" navProp={this.props.navigation} />
                <NavHeader pressAll={this.onPressAll} pressSubscriptions={this.onPressSubscriptions} pressWarranties={this.onPressWarranties} />
                <Content>
                    {toggleAll ? <View style={{ marginTop: 60 }}>
                        <TimelineSubs />
                    </View> : null}
                    {toggleSubsriptions ? <View style={{ marginTop: 60 }}>
                        <TimelineSubscriptions />
                    </View> : null}
                    {toggleWarranties ? <View style={{ marginTop: 60 }}>
                        <TimelineWarranties />
                    </View> : null}

                </Content>



            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        height: null,
        width: null,
        fontFamily: "HelveticaNeueBold",
    },
});

export default TimelineScreen;