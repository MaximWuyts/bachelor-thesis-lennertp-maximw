import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Item, Icon, Input, Picker, DatePicker } from 'native-base';

class AddDocument extends React.Component {
    constructor(props) {
        super(props);

        this.state = { chosenDate: new Date() };

    }

    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
    }
    render = () => {
        console.log('this', this.props);
        return (
            <View style={[styles.container]}>
                <Form>
                    {this.props.formType === "subscription" ?
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                style={{ color: '#d3d3d3' }}
                                placeholderStyle={{ color: "#d3d3d3" }}
                            >
                                <Picker.Item label="Select Your Type" value="" />
                                <Picker.Item label="weekly" value="checking" />
                                <Picker.Item label="monthly" value="saving" />
                                <Picker.Item label="yearly" value="saving" />
                            </Picker>
                        </Item>
                        : null}
                    <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>
                        <Icon name='euro' type="FontAwesome" style={{ color: 'white', fontSize: 20 }} />
                        <Input placeholder='Enter Price'
                            placeholderTextColor='#d3d3d3'
                            onChangeText={(text) => handleChange('name', text)}
                            value={name}
                            style={{ color: '#d3d3d3', paddingLeft: 20 }}
                        />
                    </Item>
                    <Item>
                        <DatePicker
                            defaultDate={new Date(2019, 5, 6)}
                            minimumDate={new Date(2019, 1, 1)}
                            maximumDate={new Date(2021, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"spinner"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                            style={{ fontSize: 25, paddingTop: 33 }}
                        />
                    </Item>

                    <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>

                        <Input placeholder='Url Link'
                            placeholderTextColor='#d3d3d3'
                            onChangeText={(text) => handleChange('name', text)}
                            value={name}
                            style={{ color: '#d3d3d3', paddingLeft: 20 }}
                        />
                    </Item>
                </Form>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default AddDocument;