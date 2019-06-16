import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import moment from "moment";
import Icon from 'react-native-vector-icons/Ionicons'

class TimelineSubs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allDocuments: [],
        };
    }

    getMostRecentDate = () => {
        this.state.allDocuments.sort((a, b) => moment(a.value.chosenDate) - moment(b.value.chosenDate));
        return this.state.allDocuments[0]
    }


    componentDidMount() {
        let allDocuments;
        allDocuments = [...this.props.subscriptions, ...this.props.warranties]
        console.log('all', allDocuments);
        this.setState({
            allDocuments
        })
    }

    getIcon = (productType) => {
        const { iconStyle, carStyle, phoneStyle } = styles;
        if (productType === 'online') {
            return <Icon name='md-laptop' size={32} color={'#04A7F1'} style={iconStyle} />
        }
        if (productType === 'financial') {
            return <Icon name='md-card' size={32} color={'#04A7F1'} style={iconStyle} />
        }
        if (productType === 'transport') {
            return <Icon name='md-car' size={32} color={'#04A7F1'} style={[iconStyle, carStyle]} />
        }
        return <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={[iconStyle, phoneStyle]} />
    }


    render = () => {
        console.log('clogsd', this.state.allDocuments);
        const { listViewstyle, leftTextStyle, daysContStyle, dateStyle, listViewstyleNoBorder, iconStyle, iconContStyle, noListViewstyle, noListTextStyle, noListTextStyle2 } = styles

        return (
            <View>
                <FlatList
                    data={this.state.allDocuments}
                    renderItem={({ item, index }) => {

                        return (
                            <View style={{ marginBottom: 25 }}>
                                <View style={daysContStyle}>
                                    <Text style={dateStyle}>{moment(item.value.chosenDate).format('DD/MM/YYYY')}</Text>
                                </View>
                                <View style={listViewstyle} key={index}>
                                    {this.getIcon(item.value.productType)}
                                    <Text style={leftTextStyle}>{item.value.name}</Text>
                                </View>

                            </View>
                        )
                    }
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    daysContStyle: {
        borderBottomColor: "#D8D8D8",
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30
    },
    dateStyle: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center"
    },
    listViewstyle: {
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-between",
        marginLeft: 75,
        marginRight: 75,
    },
    noListViewstyle: {
        flexDirection: 'column',
        marginTop: 15,
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    noListTextStyle: {
        fontSize: 19,
        marginBottom: 20,
        color: "#575757",
        fontWeight: "bold"
    },
    noListTextStyle2: {
        fontSize: 22,
        color: "#04A7F1",
        fontWeight: "bold",
        paddingBottom: 20
    },
    listViewstyleNoBorder: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-between",
    },
    leftTextStyle: {
        fontSize: 15,
        color: "#343434",
    },
    rightTextStyle: {
        fontSize: 15,
        color: "#343434",
    },

    iconStyle: {
        marginTop: -5,
        paddingBottom: 5,
        zIndex: +2
    },
    iconContStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    carStyle: {
        marginLeft: 3.5
    },
    phoneStyle: {
        marginLeft: 6.5
    }
});

function mapStateToProps(state) {

    return {
        subscriptions: state.documentReducer.subscriptions,
        warranties: state.documentReducer.warranties,
    }
};

export default connect(mapStateToProps, null)(TimelineSubs);
