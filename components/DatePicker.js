import { Modal, Platform, Pressable, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react";

const DatePicker = (props) => {
    const { defaultDate, onDateChange } = props
    const [date, setDate] = useState(new Date(defaultDate))
    const [show, setShow] = useState(false)

    const onChange = (evt, selectedDate) => {
        setDate(new Date(selectedDate))
    }

    const onAndroidChange = (evt, selectedDate) => {
        setShow(false)
        if (selectedDate) {
            setData(new Date(selectedDate))
        }
    }

    const onCancelPress = () => {
        onDateChange(new Date(date))
        setShow(false)
    }

    const onDonePress = () => {
        onDateChange(date)
        setShow(false)
    }
    const renderDatePicker = () => {
        return (
            <>
                <DateTimePicker
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    timeZoneOffsetInMinutes={0}
                    value={new Date(date)}
                    mode='date'
                    minimumDate={new Date(1920, 10, 20)}
                    maximumDate={new Date()}
                    onChange={Platform.OS === 'ios' ? onChange : onAndroidChange}
                />
            </>
        )
    }
    return (
        <Pressable style={styles.box} onPress={() => setShow(true)}
            activeOpacity={0}
        >
            <View>
                <Text style={styles.text}>{`${date.getFullYear()} - ${date.getMonth()+1} - ${date.getDate(
                )}`}</Text>
                {Platform.OS !== 'ios' && show && renderDatePicker()}

                {Platform.OS === 'ios' && (
                    <Modal
                        transparent={true}

                        animationType='slide'
                        visible={show}
                        supportedOrientation={['portrait']}
                        onRequestClose={() => setShow(!show)}
                    >
                        <View style={styles.screen}>
                            <TouchableHighlight underlayColor={"#FFF"}
                                style={styles.pickerContainer}>

                                <View style={{background: 'white'}}>
                                    <View style={{marginTop: 20}}>{renderDatePicker()}</View>
                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onCancelPress}
                                        style={[styles.btnText, styles.btnCancel]}
                                    >
                                        <Text>Cancel</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onDonePress}
                                        style={[styles.btnText, styles.btnDone]}
                                    >
                                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                                            Done
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                )}
            </View>
        </Pressable>
    );
};

export default DatePicker;

const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: '30%',
        position: 'absolute',
        bottom: 0,
    },

    box: {
        justifiContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 50,
        backgroundColor: 'white',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginTop: 40,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15,
    },
    screen: {
        flex: 1,
    },
    btnText: {
        position: 'absolute',
        top: 0,
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCancel: {
        left: 0,
    },
    btnDone: {
        right: 0,
    },
})