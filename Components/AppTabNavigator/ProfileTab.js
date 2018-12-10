import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {Icon, Container, Content, Body, Left, Right, Header, Button} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon name="person" style={{color: tintColor}}/>
    };

    render() {
        return (
            <Container style={{flex: 1, backgroundColor: 'white'}}>
                <Header style={{backgroundColor: '#fff', paddingTop: 5}}>
                    <Left><Icon name="md-person-add" style={{paddingLeft: 10}}/></Left>
                    <Body><Text>alexey</Text></Body>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{paddingRight: 10, fontSize: 32}}/>
                    </Right>
                </Header>
                <Content>
                    <View>
                        <View style={{flexDirection: "row", paddingTop: 10}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image source={require('../../assets/me.jpg')}
                                       style={{width: 75, height: 75, borderRadius: 37.5}}/>
                            </View>
                            <View style={{flex: 3}}>
                                <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                                    <View style={{alignItems: "center"}}>
                                        <Text>10</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>posts</Text>
                                    </View>
                                    <View style={{alignItems: "center"}}>
                                        <Text>106</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>followers</Text>
                                    </View>
                                    <View style={{alignItems: "center"}}>
                                        <Text>73</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>following</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: "row", paddingTop: 10}}>
                                    <Button bordered dark
                                            style={{flex: 3, marginLeft: 10, justifyContent: 'center', height: 30}}>
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button bordered dark style={{
                                        flex: 1,
                                        height: 30,
                                        marginLeft: 10,
                                        marginRight: 5,
                                        justifyContent: 'center'
                                    }}>
                                        <Icon name="settings"/>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingBottom: 10, paddingHorizontal: 10}}>
                            <Text style={{fontWeight:"bold"}}>Alexey Konkiev</Text>
                            <Text>Tester of React Native | Worker | Commercial Pilot</Text>
                            <Text>www.alexeykonkiev.net</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
