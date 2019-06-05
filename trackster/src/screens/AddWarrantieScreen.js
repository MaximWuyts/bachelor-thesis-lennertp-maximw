import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import bgImage from '../../assets/otherback.png';
import AppOtherHeader from '../components/AppOtherHeader';
import { Content, Card } from 'native-base'
import AddDocument from '../components/AddDocument';
import Icon from 'react-native-vector-icons/AntDesign';

class AddWarrantieScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    render = () => {
        const { listViewstyle, textHeaderStyle, contentStyle, contentStyle2, importIconStyle } = styles
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />
                <AppOtherHeader headerText={"Add Warrantie"} navProp={this.props.navigation} />

                <Content style={listViewstyle}>
                    <View>
                        <Text style={textHeaderStyle}>General Info</Text>
                    </View>
                    <Card style={contentStyle}>
                        <AddDocument formType="warrantie" />
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 15 }}>
                        <Text style={textHeaderStyle}>Important Documents</Text>
                    </View>
                    <Card style={contentStyle}>
                        <View style={contentStyle2}>
                            <Icon name="upload" size={30} color={"#04A7F1"} style={importIconStyle} />
                        </View>


                    </Card>

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
    listViewstyle: {

        paddingRight: 10,
        paddingLeft: 10
    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginTop: 12.5,
        marginBottom: 15,
        textAlign: "center"
    },
    textHeaderStyle2: {
        fontSize: 20,
        color: "#575757",
        marginTop: 12.5,
        textAlign: "center"
    },
    contentStyle: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        backgroundColor: "#fff",
        elevation: 3,
    },
    contentStyle2: {
        margin: 20,
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#04A7F1'
    },
    importIconStyle: {
        padding: 10,
    }
});

export default AddWarrantieScreen;