/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';
import ClickableItem from 'light/src/component/widget/base/ClickableItem';

export default class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSize: 0
        }
    }
    componentDidMount() {
    }

    resizeImage(event) {
        let { x, y, width, height } = event.nativeEvent.layout;
        console.log(height);
        this.setState((previousState) => {
            return {
                imageSize: height
            };
        });
    }

    click() {

    }

    render() {
        return (
            <View style={styles.container}>
                <ClickableItem onClick={this.click}>
                    <View style={styles.content}>
                        <View style={styles.textContainer} onLayout={this.resizeImage.bind(this)}>
                            <Text ellipsizeMode={'tail'} numberOfLines={1} allowFontScaling={false} style={styles.title}>{this.props.title}</Text>
                            <Text ellipsizeMode={'tail'} numberOfLines={1} allowFontScaling={false} style={styles.intro}>{this.props.intro.replace(/\n/g, '')}</Text>
                            <Text ellipsizeMode={'tail'} numberOfLines={1} allowFontScaling={false} style={styles.info}>{this.props.info}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={this.props.src} style={[styles.image2, { height: this.state.imageSize, width: this.state.imageSize / 2 }]} />
                            <Image source={this.props.src} style={[styles.image1, { height: this.state.imageSize, width: this.state.imageSize }]} />
                        </View>
                    </View>
                </ClickableItem>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    content: {
        flexDirection: 'row'
    },
    textContainer: {
        paddingTop: 7,
        paddingLeft: 7,
        paddingRight: 7,
        flex: 1
    },
    title: {
        marginBottom: 3,
        fontSize: 16,
        color: Color.accent_text_color
    },
    intro: {
        color: Color.text_grey,
        fontSize: 12
    },
    info: {
        marginBottom: 5,
        lineHeight: 20,
        fontSize: 12,
        color: Color.primary_color,
        includeFontPadding: false
    },
    imageContainer: {
        // borderRadius: 5,
        // backgroundColor: 'red',
        // borderTopRightRadius: 5,
    },
    image1: {
        borderRadius: 5,
        resizeMode: 'cover'
    },
    image2: {
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0
    }
});