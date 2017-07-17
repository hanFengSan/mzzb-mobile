/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, Picker, ActionSheetIOS } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';
import ImageSet from 'light/src/assets/value/ImageSet';
import ClickableItem from 'light/src/component/widget/base/ClickableItem';

export default class CustomPicker extends Component {
    state = {
        location: 1
    };

    getDropDownItems() {
        return this.props.dropDownItems.map(item => {
            return (
                <Picker.Item label={item.name} value={item.id} key={item.id} />
            );
        });
    }

    getDropDownItemsIOS() {
        let result = this.props.dropDownItems.map(item => {
            return item.name;
        });
        result.push('取消');
        return result;
    }

    onClickIosPicker() {
        ActionSheetIOS.showActionSheetWithOptions({
            options: this.getDropDownItemsIOS(),
            cancelButtonIndex: this.getDropDownItemsIOS().length - 1,
        }, (buttonIndex) => {
            if (buttonIndex != this.getDropDownItemsIOS().length - 1) {
                this.setState({
                    location: this.props.dropDownItems[buttonIndex].id
                });
                this.props.onValueChange(this.state.location);
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    Platform.OS === 'ios' ?
                        <ClickableItem onClick={this.onClickIosPicker.bind(this)}>
                            <View style={styles.iosPicker}>
                                <Text allowFontScaling={false} style={styles.title}>
                                    {(this.props.dropDownItems.find(item => item.id === this.state.location) || { name: '' }).name}
                                </Text>
                                <Image style={styles.dropDown} source={ImageSet.ic_drop_down} />
                            </View>
                        </ClickableItem>
                        :
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.location}
                            onValueChange={(loc) => {
                                this.setState({ location: loc });
                                this.props.onValueChange(loc);
                            }
                            }>
                            {
                                this.getDropDownItems()
                            }
                        </Picker>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: Platform.OS === 'ios' ? 0 : 17,
        marginTop: 1
    },
    picker: {
        color: 'white',
        width: 185,
    },
    pickerItem: {
        color: 'white'
    },
    dropDown: {
        width: 25,
        height: 25,
        marginTop: -1
    },
    iosPicker: {
        flexDirection: 'row'
    },
    title: {
        color: 'white',
        fontSize: Platform.OS === 'ios' ? 17 : 18,
        fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal'
    }
});
