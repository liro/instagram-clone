import React, {Component} from "react";
import {Image, StyleSheet, Text} from "react-native";
import {Body, Button, Card, CardItem, Icon, Left, Thumbnail} from 'native-base';

class CardComponent extends Component {
    render() {
        const images = {
            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png'),
        };

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')}/>
                        <Body>
                        <Text>Alexey</Text>
                        <Text note>Dec, 09 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{color: 'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height: 20}}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        <Text style={{fontWeight:"900"}}>alexey </Text>
                        How to configure, apply and disable intention actions in IntelliJ IDEA. Learn about ... Click
                        the
                        light bulb icon (or press Alt+Enter ) to open the list of suggestions.
                    </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
