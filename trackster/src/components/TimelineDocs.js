import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import moment from "moment";
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

class TimelineDocs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allDocuments: [],
        };
    }

    // getMostRecentDate = () => {
    //     this.state.allDocuments.sort((a, b) => moment(a.value.chosenDate) - moment(b.value.chosenDate));
    //     return this.state.allDocuments[0]
    // }


    componentDidMount() {
        let allDocuments;
        allDocuments = [...this.props.subscriptions, ...this.props.warranties]
        allDocuments.sort((a, b) => moment(a.value.chosenDate) - moment(b.value.chosenDate));
        this.setState({
            allDocuments
        })
    }

    getIcon = (docType) => {
        const { iconStyle, warIconStyle } = styles;
        if (docType === 'subscription') {
            return <EvilIcon name="play" size={42} color={'#04A7F1'} style={iconStyle} />
        }
        else return <Icon name="check" size={28} color={'#04A7F1'} style={warIconStyle} />
    }


    render = () => {
        const { listViewstyle, daysContStyle, dateStyle, textStyle } = styles

        return (
            <View>
                <FlatList
                    data={this.state.allDocuments}
                    renderItem={({ item, index }) => {
                        function compare(dateTimeA, dateTimeB) {
                            var momentA = moment(dateTimeA, "MM/DD/YYYY");
                            var momentB = moment(dateTimeB, "MM/DD/YYYY");
                            if (momentA > momentB) return 1;
                            else if (momentA < momentB) return -1;
                            else return 0;
                        }
                        if (compare(item.value.chosenDate, moment().format('MM/DD/YYYY')) === 1) {
                            return (
                                <View style={{ marginBottom: 25 }}>
                                    <View style={daysContStyle}>
                                        <Text style={dateStyle}>{moment(item.value.chosenDate).format('DD/MM/YYYY')}</Text>
                                    </View>
                                    <View style={listViewstyle} key={index}>
                                        {this.getIcon(item.value.docType)}
                                        <Text style={textStyle}>{item.value.name}</Text>
                                    </View>

                                </View>
                            )
                        }
                    }}
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
        fontSize: 22,
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

    textStyle: {
        fontSize: 15,
        color: "#343434",
    },

    iconStyle: {
        marginTop: -5,
        paddingBottom: 5,
        zIndex: +2
    },
    warIconStyle: {
        marginTop: -5,
        marginLeft: 5,
        paddingBottom: 5,
        zIndex: +2
    }
});

function mapStateToProps(state) {

    return {
        subscriptions: state.documentReducer.subscriptions,
        warranties: state.documentReducer.warranties,
    }
};

export default connect(mapStateToProps, null)(TimelineDocs);
