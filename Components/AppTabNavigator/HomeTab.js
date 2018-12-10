import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Container, Content, Icon, Thumbnail, Header, Left, Right, Body} from 'native-base';
import CardComponent from "../CardComponent";

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon name="ios-home" style={{color: tintColor}}/>
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Header style={{backgroundColor: '#fff', paddingTop:5}}>
                        <Left><Icon name="ios-camera" style={{paddingLeft: 10}}/></Left>
                        <Body><Text>Instagram</Text></Body>
                        <Right><Icon name="ios-send" style={{paddingRight: 10}}/></Right>
                    </Header>
                    <View style={{height: 100}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 7
                        }}>
                            <Text style={{fontWeight: "bold"}}>Stories</Text>

                            <View style={{alignItems: 'center', flexDirection: "row"}}>
                                <Icon name="md-play" style={{fontSize:14}}/>
                                <Text> Watch All</Text>
                            </View>

                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView
                                horizontal={true}
                                showHorizontalScrollIndicator={false}
                                contentContainerStyle={{alignItems: 'center', paddingStart: 5, paddingEnd: 5}}
                            >
                                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/1.jpg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/2.jpg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/3.jpg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/4.jpg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/5.jpg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/6.jpg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/7.jpg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource="1" likes="101"/>
                    <CardComponent imageSource="2" likes="55"/>
                    <CardComponent imageSource="3" likes="11"/>
                </Content>
            </Container>
        );
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
