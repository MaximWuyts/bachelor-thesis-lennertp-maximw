import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Item, Input, Picker, DatePicker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'


const AddDocument = ({ handleChange, name, price, productType, urlLink, type, setDate, formType, warrantyDuration }) => {


    return (
        <View>
            <Form>
                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>
                    <Input placeholder='Enter Name'
                        placeholderTextColor='#A9A9A9'
                        onChangeText={(text) => handleChange('name', text)}
                        value={name}
                        style={{ color: '#A9A9A9', paddingLeft: 20 }}
                    />
                </Item>
                {formType === "subscription" ?
                    <Item picker>
                        <Picker


                            iosHeader="Select type"
                            placeholder="Subscription Type"
                            placeholderStyle={{ color: "#A9A9A9", marginLeft: 3 }}
                            selectedValue={type}
                            onValueChange={(value) => handleChange('type', value)}
                        >
                            <Picker.Item label="Select Your Type" value="dfsfd" />
                            <Picker.Item label="weekly" value="weekly" />
                            <Picker.Item label="monthly" value="monthly" />
                            <Picker.Item label="yearly" value="yearly" />
                        </Picker>
                    </Item>
                    :
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select type"
                            placeholder="Subscription Type"
                            style={{ color: '#A9A9A9', marginLeft: 3 }}
                            placeholderStyle={{ color: "#A9A9A9" }}
                            selectedValue={warrantyDuration}
                            onValueChange={(value) => handleChange('warrantyDuration', value)}
                        >
                            <Picker.Item label="Warranty Duration" value="" />
                            <Picker.Item label="6 months" value="6 months" />
                            <Picker.Item label="1 year" value="1 year" />
                            <Picker.Item label="2 years" value="2 years" />
                            <Picker.Item label="3 years" value="3 years" />
                        </Picker>
                    </Item>}
                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>
                    <Icon name='euro' style={{ color: '#A9A9A9', fontSize: 20, paddingBottom: 15 }} />
                    <Input placeholder='Enter Price'
                        placeholderTextColor='#A9A9A9'
                        keyboardType="numeric"
                        onChangeText={(text) => handleChange('price', text)}
                        value={price}
                        style={{ color: '#A9A9A9', paddingLeft: 20, height: 10, paddingBottom: 20 }}
                    />
                </Item>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        style={{ color: '#A9A9A9', marginLeft: 3 }}
                        placeholderStyle={{ color: "#A9A9A9" }}
                        selectedValue={productType}
                        iosHeader="Select type"
                        placeholder="Product Type"
                        onValueChange={(value) => handleChange('productType', value)}
                    >
                        <Picker.Item label="Select Your Product Type" value="" />
                        <Picker.Item label="financial" value="financial" />
                        <Picker.Item label="transport" value="transport" />
                        <Picker.Item label="online" value="online" />
                        <Picker.Item label="electronics" value="electronics" />
                    </Picker>
                </Item>
                <Item style={{ marginTop: 10, flexDirection: 'row-reverse' }}>

                    <Input placeholder='Url Link'
                        placeholderTextColor='#A9A9A9'
                        onChangeText={(text) => handleChange('urlLink', text)}
                        value={urlLink}
                        placeHolderTextStyle={{ color: "#A9A9A9", paddingBottom: 0, }}
                        style={{ color: '#A9A9A9', paddingLeft: 20, height: 35 }}
                    />
                </Item>
                <Item>
                    <DatePicker
                        defaultDate={new Date(2019, 5, 6)}
                        minimumDate={new Date(2019, 1, 1)}
                        maximumDate={new Date(2021, 12, 31)}
                        locale={"en"}
                        iosIcon={"#A9A9A9"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"

                        placeHolderTextStyle={{ color: "#A9A9A9", paddingBottom: 35, marginLeft: -5, marginTop: 10 }}
                        onDateChange={setDate}
                        disabled={false}
                        style={{ fontSize: 25, paddingTop: 25, height: 10, paddingBottom: 15 }}
                    />
                </Item>
            </Form>


        </View>
    );
}



export default AddDocument;